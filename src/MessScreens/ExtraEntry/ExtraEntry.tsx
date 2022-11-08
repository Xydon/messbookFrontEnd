import React, { useEffect, useState } from "react";
import AssetStore from "../../assets/AssetStore";
import ExtraItemWithCost from "../../Entities/ExtraItemWithCost";
import Mess_extra_entry from "../../Entities/Mess_extra_entry";
import Student from "../../Entities/Student";
import ListItem from "../../ProjectComponents/ListItem";
import StudentProfileList from "../../ProjectComponents/StudentProfileList";
import Subheading from "../../ProjectComponents/Subheading";
import { Fetch } from "../../Solutions/FetchUtils";
import StateSetter from "../../Solutions/StateSetter";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";

import "./ExtraEntry.css";
import DataFetching from "./fetch";

function ExtraEntry() {
	const fetcher = new DataFetching();

	const [rollNumber, setRollNumber] = useState<string>("");
	const [extraEntryText, setExtraEntryText] = useState<string>("");

	const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
	const [extraEntriesOfToday, setExtraEntriesOfToday] = useState<
		Array<ExtraItemWithCost>
	>([]);

	const handleStudentSelection = () => {
		if (rollNumber === "") {
			alert("roll number is not entered");
			return;
		}

		Fetch.getRequest<Student>(`api/student/information/${rollNumber}`).then(
			(student) => student && setSelectedStudent(student)
		);

		fetcher
			.getListOfExtraEntries(rollNumber, "XKLSEJF")
			.then((data) => data && setExtraEntriesOfToday(data));
	};

	const createExtraEntry = () => {
		if (rollNumber === "" || extraEntryText === "") return;
		fetcher
			.createExtraEntry(rollNumber, "XKLSEJF", extraEntryText)
			.then((data) => {
				if (data) {
					setExtraEntriesOfToday((prev) => [
						...prev,
						{ id: "null", item_name: extraEntryText, price: 20 },
					]);
				}
			});
	};


	return (
		<DashBoardTemplate heading="Extra Entry" navList={MessRouterConfig}>
			<div className="row vc mb-9">
				<div className="col-3">
					<Subheading text="Student" type="small" />
					{selectedStudent === null ? (
						"none selected"
					) : (
						<StudentProfileList {...selectedStudent} />
					)}
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
					<div
						className="button_size_m bg_black round-8 label_white pl-3 pr-3"
						onClick={createExtraEntry}
					>
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="extraItemsListBox col-8 mb-5  ">
					{extraEntriesOfToday.map((extraEntry, index) => (
						<ListItem size="s" outline={true} key={index}>
							<p className="cc_16 medium ml-2">{extraEntry.item_name}</p>
							<div className="flex mr-2">
								<p className="cc_16 light">Rs. {extraEntry.price}</p>
								<AssetStore.Close
									className="ml-4 cp"
									onClick={() => {
										fetcher.deleteExtraEntry(extraEntry.id).then((data) => {
											setExtraEntriesOfToday((prev) =>
												prev.filter((val) => val.id !== extraEntry.id)
											);
										});
									}}
								/>
							</div>
						</ListItem>
					))}
				</div>
				<div className="col"></div>
			</div>
		</DashBoardTemplate>
	);
}

export default ExtraEntry;
