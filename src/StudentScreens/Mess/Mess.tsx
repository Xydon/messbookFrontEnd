import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Extra_item_menu from "../../Entities/Extra_item_menu";
import Feedback from "../../Entities/Feedback";
import Mess_absent from "../../Entities/Mess_absent";
import { ResponseWithError } from "../../Entities/ResponseWithError";
import AbsentCalculator from "../../ProjectComponents/AbsentCalculator";
import DetailsGroup from "../../ProjectComponents/DetailsGroup";
import DetailsShadowCard from "../../ProjectComponents/DetailsShadowCard";
import FeedbackCard from "../../ProjectComponents/FeedbackCard";
import ListItem from "../../ProjectComponents/ListItem";
import { DetailsConfig, DetailsRowData } from "../../props";
import DateUtils from "../../Solutions/DateUtils";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import StudentRouteConfig from "../RouterConfig";

import "./Mess.css";
import { FetchUtils } from "./MessDetailsFetch";

type MessAbsentForm = {
	startDate: string;
	endDate: string;
};

async function postMarkAbsent(postData: MessAbsentForm) {
	if (postData.endDate === "" || postData.startDate === "")
		alert("either of start or end date is missing");

	const messAbsent = new Mess_absent(
		"20075087",
		"",
		"XKLSEJF",
		new Date(postData.startDate),
		new Date(postData.endDate)
	);

	const verdict = await axios.post<ResponseWithError<boolean>>(
		"api/mess/markAbsent",
		messAbsent,
		{
			params: { firstDateOfMonth: DateUtils.jsonDateFormat(new Date()) },
		}
	);

	const verdictError = verdict.data.error;
	if (verdictError.errorCode !== "SUCCESS") {
		alert(verdictError.errorMessages[verdictError.errorMessages.length - 1]);
	}

	alert('success'); 
}

function MarkAbsent() {
	const [absentData, setAbsentData] = useState<MessAbsentForm>({
		startDate: "",
		endDate: "",
	});

	const handleInput =
		(targ: "start" | "end") => (e: React.FormEvent<HTMLInputElement>) => {
			const inputDate = (e.target as HTMLInputElement).value;
			if (targ === "start") {
				setAbsentData((prev) => {
					return { ...prev, startDate: inputDate };
				});
			} else setAbsentData((prev) => ({ ...prev, endDate: inputDate }));
		};

	return (
		<>
			<div className="row mb-6">
				<div className="box">
					<p className="cc_27 medium">Mark Absent</p>
				</div>
			</div>

			<div className="row vc mb-4">
				<div className="startInputBox mr-2">
					<input
						className="form__input startInput messAbsentInput vc"
						type="date"
						onInput={handleInput("start")}
					/>
				</div>
				<div className="separatorBox">
					<p className="cc_22 bold">-</p>
				</div>
				<div className="endInputBox ml-2">
					<input
						type="date"
						className="form__input messAbsentInput endInput"
						onInput={handleInput("end")}
					/>
				</div>
			</div>

			<div className="row mb-10">
				<div className="box" onClick={() => {
					postMarkAbsent(absentData); 
				}}>
					<div className="button_size_m round-16 label_white bg_black ph-3">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>
		</>
	);
}

function Mess() {
	const fetcher = new FetchUtils();

	const [messDetails, setMessDetails] = useState();
	const [feedbacks, setFeedbacks] = useState<Array<Feedback>>();
	const [markAbsentData, setMarkAbsentData] = useState();
	const [extraItems, setExtraItems] = useState<Array<Extra_item_menu>>([]);

	useEffect(() => {
		fetcher.getExtraItemsMenu().then((data) => data && setExtraItems(data));
		fetcher
			.getFeedbacksOfMess("XKLSEJF", "20075087")
			.then((data) => data && setFeedbacks(data));
	}, []);

	const MessDetails: DetailsConfig = {
		heading: "Details",
		rows: [
			new DetailsRowData("name", "Shyam Sundar"),
			new DetailsRowData("Phone Number", "989981921831"),
			new DetailsRowData("Hostel", "Sn Bose"),
		],
	};
	return (
		<DashBoardTemplate heading="Mess" navList={StudentRouteConfig}>
			<p className="cc_27 mb-8 semi_bold">Semester - 4th</p>

			<div className="row g-2">
				<div className="col">
					<DetailsShadowCard details={MessDetails} />
				</div>
				<div className="col">
					<AbsentCalculator />
				</div>
			</div>

			<div className="row mt-5 mb-4">
				<p className="cc_27 medium">Feedbacks</p>
			</div>

			<div className="flex mb-10 MessDetails__FeedbackCardContainer">
				{feedbacks?.map((feedback) => (
					<FeedbackCard
						month={DateUtils.monthMapper(
							new Date(feedback.month_of_comment).getMonth()
						)}
						text={feedback.text}
						rating={feedback.rating}
					/>
				))}
			</div>

			<div className="row mt-5 mb-4">
				<div className="box">
					<p className="cc_27 medium">Extra Items Menu</p>
				</div>
			</div>

			<div className="row mb-10">
				<div className="ExtraItemBox col-7 mb-1">
					{extraItems.map((val, index) => (
						<ListItem size="s" outline={true} key={index}>
							<p className="cc_16 medium">{val.name}</p>
							<p className="cc_16">{val.price}</p>
						</ListItem>
					))}
				</div>
			</div>

			<MarkAbsent />
		</DashBoardTemplate>
	);
}

export default Mess;
