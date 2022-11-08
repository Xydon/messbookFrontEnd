import React, { useState } from "react";
import AssetStore from "../../assets/AssetStore";
import Student from "../../Entities/Student";
import ListItem from "../../ProjectComponents/ListItem";
import StudentProfileList from "../../ProjectComponents/StudentProfileList";
import Subheading from "../../ProjectComponents/Subheading";
import { Fetch } from "../../Solutions/FetchUtils";
import StateSetter from "../../Solutions/StateSetter";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";

import "./ExtraEntry.css";

function ExtraEntry() {
	const [rollNumber, setRollNumber] = useState<string>("");
	const [extraEntryText, setExtraEntryText] = useState<string>("");

	const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

	const handleStudentSelection = () => {
		if (rollNumber === "") {
			alert("roll number is not entered");
			return;
		}

		Fetch.getRequest<Student>(`api/student/information/${rollNumber}`).then(
			(student) => student && setSelectedStudent(student)
		);
	};

	return (
		<DashBoardTemplate heading="Extra Entry" navList={MessRouterConfig}>
			<div className="row vc mb-9">
				<div className="col-3">
					<Subheading text="Student" type="small" />
					<p className="cc_16">
						{selectedStudent === null ? (
							"none selected"
						) : (
							<StudentProfileList {...selectedStudent} />
						)}
					</p>
				</div>
				<div className="col-4 flex">
					<div className="searchBox selectionSearchBox pl-2 pr-2 vc mr-2">
						<input
							type="number"
							className="input-clear cc_16"
							placeholder="enter roll number"
							onInput={(e) => {
								setRollNumber(StateSetter.filterInput(e));
							}}
						/>
					</div>

					<div
						className="button_size_m bg_black round-8 label_white pl-3 pr-3"
						onClick={handleStudentSelection}
					>
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
						type="text"
						className="input-clear cc_16"
						placeholder="enter item name"
						onInput={(e) => {
							setExtraEntryText(StateSetter.filterInput(e));
						}}
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
