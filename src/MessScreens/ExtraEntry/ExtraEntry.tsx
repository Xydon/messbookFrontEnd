import React from "react";
import AssetStore from "../../assets/AssetStore";
import ListItem from "../../ProjectComponents/ListItem";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./ExtraEntry.css";

function ExtraEntry() {
	return (
		<DashBoardTemplate heading="Extra Entry" navList={[]}>
			<div className="row vc mb-9">
				<div className="col-3">
					<Subheading text="Student" type="small" />
					<p className="cc_16">none selected</p>
				</div>
				<div className="col-4 flex">
					<div className="searchBox selectionSearchBox pl-2 pr-2 vc mr-2">
						<input
							type="number"
							className="input-clear cc_16"
							placeholder="enter roll number"
						/>
					</div>

					<div className="button_size_m bg_black round-8 label_white pl-3 pr-3">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>

			<div className="row">
				<Subheading text="Add Extra" type="small" />
			</div>

			<div className="row mb-8">
				<div className="searchBox selectionSearchBox pl-2 pr-2 vc mr-2 col-4">
					<input
						type="number"
						className="input-clear cc_16"
						placeholder="enter roll number"
					/>
				</div>

				<div className="box">
					<div className="button_size_m bg_black round-8 label_white pl-3 pr-3">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="extraItemsListBox col-8 mb-5  ">
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
					<ListItem size="s" outline={true}>
						<p className="cc_16 medium ml-2">Item Name</p>
						<div className="flex mr-2">
							<p className="cc_16 light">Rs. 20</p>
							<AssetStore.Close className="ml-4 cp" />
						</div>
					</ListItem>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default ExtraEntry;
