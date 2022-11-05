#include <iostream>
#include <vector>

using namespace std; 

class Verdicts {
public : 
	constexpr static int SUCCESS = 1; 
	constexpr static int FAILED = 0; 
};

class NodeVerdicts : public Verdicts {
public : 
	constexpr static int NODE_UNDERFLOW = -1; 
	constexpr static int VALUE_NOT_FOUND = -2; 
	constexpr static int NODE_OVERFLOW = -3; 
	constexpr static int INSERT_AVAILAIBLE = 2;
};

// DATA CLASS 
class Node {
protected: 
	bool isLeaf; 
	vector<int> keyRecord; 
	vector<Node* > pointerRecord; 
	int size = 0; 
	int recordSize = 0;
public:

	vector<Node*>& getPointerRecord() {
		return pointerRecord; 
	}

	vector<int>& getKeyRecord() {
		return keyRecord; 
	}

	Node(size_t size) : size(size) {
		keyRecord.resize((int)size-1); 
		pointerRecord.resize(size); 
	}

	bool getIsLeaf() {
		return isLeaf; 
	}

	bool setIsLeaf(bool val) {
		isLeaf = val; 
	}

	bool isFull() {
		if (keyRecord.size() == size) true; 
		return false; 
	}

	bool insert(int data) {
		if (isFull()) return false; 

		keyRecord.push_back(data); 
		int j = keyRecord.size(); 

		while (j >= 0 && keyRecord.at(j - 1) > keyRecord.at(j)) {
			swap(keyRecord.at(j), keyRecord.at(j - 1)); 
			j--; 
		}

		return true; 
	}

	int getDataAt(int index) {
		return keyRecord.at(index); 
	}

	int remove(int data) {
		if (keyRecord.size() == 0) return NodeVerdicts::NODE_UNDERFLOW;
		
		int ptr = 0; 
		for (; ptr < keyRecord.size(); ++ptr) {
			if (keyRecord.at(ptr) == data) break; 
		}

		if (ptr == keyRecord.size()) NodeVerdicts::VALUE_NOT_FOUND; 

		for (; ptr + 1 < keyRecord.size(); ++ptr) {
			swap(keyRecord.at(ptr), keyRecord.at(ptr + 1)); 
		}

		keyRecord.pop_back();
		return NodeVerdicts::SUCCESS; 
	}

	Node * getPonterOfData(int data) {
		int i = 0; 
		int n = keyRecord.size(); 

		for (; i < n; ++i) {
			if (keyRecord[i] == data) break; 
		}

		if (i == n) return nullptr; 

		return pointerRecord.at(i);
	}


	int getCurrentSize() {
		return recordSize; 
	}

	int setCurrentSize(int size) {
		recordSize = size; 
	}

	void setKeyAt(int index, int data) {
		keyRecord.at(index) = data; 
	}
};

// TREE CLASS 
class BPlusTree {
	Node* root = nullptr; 
	int size = 3; 

	Node * getParentOf(Node* ptr, Node* child) {
		Node* parent;
		if (ptr->getIsLeaf() || (ptr->getPointerRecord()[0])->getIsLeaf()) {
			return NULL;
		}
		for (int i = 0; i < ptr->getCurrentSize() + 1; i++) {
			if (ptr->getPointerRecord()[i] == child) {
				parent = ptr;
				return parent;
			}
			else {
				parent = getParentOf(ptr->getPointerRecord()[i], child);
				if (parent != NULL)
					return parent;
			}
		}
		return parent;
	}

	void insertUtils(int data, Node * ptr, Node * child) {
		if (ptr->getCurrentSize() < size) {
			int i = 0;
			while (data > ptr->getKeyRecord()[i] && i < ptr->getCurrentSize())
				i++;
			for (int j = ptr->getCurrentSize(); j > i; j--) {
				ptr->getKeyRecord()[j] = ptr->getKeyRecord()[j - 1];
			}
			for (int j = ptr->getCurrentSize() + 1; j > i + 1; j--) {
				ptr->getPointerRecord()[j] = ptr->getPointerRecord()[j - 1];
			}
			ptr->getKeyRecord()[i] = data;
			ptr->setCurrentSize(ptr->getCurrentSize() + 1);
			ptr->getPointerRecord()[i + 1] = child;
		}
		else {
			Node* newInternal = new Node(size);
			vector<int> virtualKey(size + 1);
			vector<Node*> virtualPtr(size + 2);
			for (int i = 0; i < size; i++) {
				virtualKey[i] = ptr->getKeyRecord()[i];
			}
			for (int i = 0; i < size + 1; i++) {
				virtualPtr[i] = ptr->getPointerRecord()[i];
			}
			int i = 0, j;
			while (data > virtualKey[i] && i < size)
				i++;
			for (int j = size + 1; j > i; j--) {
				virtualKey[j] = virtualKey[j - 1];
			}
			virtualKey[i] = data;
			for (int j = size + 2; j > i + 1; j--) {
				virtualPtr[j] = virtualPtr[j - 1];
			}
			virtualPtr[i + 1] = child;
			newInternal->setIsLeaf(false);
			ptr->setCurrentSize((size + 1) / 2); 
			newInternal->setCurrentSize(size - (size + 1) / 2); 
			for (i = 0, j = ptr->getCurrentSize() + 1; i < newInternal->getCurrentSize(); i++, j++) {
				newInternal->getKeyRecord()[i] = virtualKey[j];
			}
			for (i = 0, j = ptr->getCurrentSize() + 1; i < newInternal->getCurrentSize() + 1; i++, j++) {
				newInternal->getPointerRecord()[i] = virtualPtr[j];
			}
			if (ptr == root) {
				Node* newRoot = new Node(size);
				newRoot->getKeyRecord()[0] = ptr->getKeyRecord()[ptr->getCurrentSize()];
				newRoot->getPointerRecord()[0] = ptr;
				newRoot->getPointerRecord()[1] = newInternal;
				newRoot->setIsLeaf(false); 
				newRoot->setCurrentSize(1);
				root = newRoot;
			}
			else {
				insertUtils(ptr->getKeyRecord()[ptr->getCurrentSize()], getParentOf(root, ptr), newInternal);
			}
		}
	}

public : 
	
	void insert(int data) {
		if (root == NULL) {
			root = new Node(size); 
			root->getKeyRecord().at(0) = data; 
			root->setIsLeaf(true); 
			root->setCurrentSize(1); 
		}
		else {
			Node* ptr = root; 
			Node* par; 
			

			while (ptr->getIsLeaf() == false) {
				par = ptr; 
				for (int i = 0; i < ptr->getCurrentSize(); i++) {
					if (data < ptr->getKeyRecord().at(i)) {
						ptr = ptr->getPointerRecord().at(i); 
						break; 
					}

					if (i == ptr->getCurrentSize() - 1) {
						ptr = ptr->getPointerRecord().at(i + 1); 
						break; 
					}
				}
			}

			if (ptr->getCurrentSize() < size) {
				int i = 0; 
				while (data > ptr->getKeyRecord().at(i) && i < ptr->getCurrentSize()) {
					i++; 
				}
				for (int j = ptr->getCurrentSize(); j > i; j--) {
					ptr->setKeyAt(j, ptr->getDataAt(j - 1)); 
				}
				
				ptr->setKeyAt(i, data); 
				ptr->setCurrentSize(ptr->getCurrentSize() + 1); 
				ptr->getPointerRecord().at(ptr->getCurrentSize()) = ptr->getPointerRecord().at(ptr->getCurrentSize() - 1); 
				ptr->getPointerRecord().at(ptr->getCurrentSize() - 1) = NULL; 
			}
			else {
				Node* newLeafToInsert = new Node(size); 
				int* vNodeArray = new int[size + 1]; 
				for (int i = 0; i < size; ++i) {
					vNodeArray[i] = ptr->getDataAt(i);
				}
				int i = 0, j = 0; 
				while (data > vNodeArray[i] && i < size) {
					i++; 
				}
				for (int j = size + 1; j > i; j--) {
					vNodeArray[j] = vNodeArray[j - 1]; 
				}
				vNodeArray[i] = data; 
				newLeafToInsert->setIsLeaf(true); 
				ptr->setCurrentSize((size + 1) / 2); 
				newLeafToInsert->setCurrentSize(size + 1 - (size + 1) / 2); 
				ptr->getPointerRecord().at(ptr->getCurrentSize()) = newLeafToInsert; 
				newLeafToInsert->getPointerRecord().at(newLeafToInsert->getCurrentSize()) = ptr->getPointerRecord().at(size); 
				ptr->getPointerRecord().at(size) = NULL; 
				for (i = 0; i < ptr->getCurrentSize(); i++) {
					ptr->getKeyRecord().at(i) = vNodeArray[i]; 
				}
				for (i = 0, j = ptr->getCurrentSize(); i < newLeafToInsert->getCurrentSize(); i++, j++) {
					newLeafToInsert->getKeyRecord().at(i) = vNodeArray[i]; 
				}
				if (ptr == root) {
					Node* newRoot = new Node(size); 
					newRoot->getKeyRecord()[0] = newLeafToInsert->getKeyRecord()[0]; 
					newRoot->getPointerRecord()[0] = ptr; 
					newRoot->getPointerRecord()[1] = newLeafToInsert; 
					newRoot->setIsLeaf(false); 
					newRoot->setCurrentSize(1); 
					root = newRoot; 
				}
				else {
					insertUtils(newLeafToInsert->getKeyRecord()[0], par, newLeafToInsert);
				}
			}
		}
	}

	void display(Node* ptr) {
		if (ptr != NULL) {
			for (int i = 0; i < ptr->getCurrentSize(); i++) {
				cout << ptr->getKeyRecord()[i] << " ";
			}
			cout << endl;
			if (ptr->getIsLeaf() != true) {
				for (int i = 0; i < ptr->getCurrentSize() + 1; i++) {
					display(ptr->getPointerRecord()[i]);
				}
			}
		}
	}
	void remove() {}
	Node* getRoot() {
		return root; 
	}
};

int main() {
	BPlusTree tree; 
	tree.insert(5); 
	tree.insert(15); 
	tree.display(tree.getRoot()); 

	return 0; 
}