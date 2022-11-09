import { motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Feedback from "../../Entities/Feedback";
import Mess from "../../Entities/Mess";
import Student from "../../Entities/Student";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import FeedbackCard from "../../ProjectComponents/FeedbackCard";
import StudentProfileList from "../../ProjectComponents/StudentProfileList";
import Subheading from "../../ProjectComponents/Subheading";
import DateUtils from "../../Solutions/DateUtils";
import { Fetch } from "../../Solutions/FetchUtils";
import StateSetter from "../../Solutions/StateSetter";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./AdminMessProfile.css";

function filterStudentList(studentList: Array<Student>, filterControl: string) {
	return studentList.filter((student) => {
		if (filterControl === "") return true;
		if (!Number.isNaN(parseInt(filterControl))) {
			return student.roll_number.includes(filterControl);
		} else {
			return student.name.toLowerCase().includes(filterControl.toLowerCase());
		}
	});
}

const calcAverageRating = (feedbacks : Array<Feedback>) => {
	let sum = 0; 
	feedbacks.forEach(feedback => sum+=feedback.rating); 
	return sum/feedbacks.length; 
}

function AdminMessProfile() {
	const [mess, setMess] = useState<Mess>();
	const [studentEnrolled, setStudentEntrolled] = useState<Array<Student>>([]);
	const [filterControl, setFilterControl] = useState<string>("");
	const [feedbacks, setFeedbacks] = useState<Array<Feedback>>([]);

	const { messId } = useParams();

	useEffect(() => {
		if (messId === undefined) return;
		(async () => {
			const mess = await Fetch.getRequest<Mess>("api/mess/fetch", {
				mess_id: messId,
			});
			mess && setMess(mess);

			const studentsEnrolled = await Fetch.getRequest<Array<Student>>(
				"api/mess/students",
				{ mess_id: messId }
			);
			studentsEnrolled && setStudentEntrolled(studentsEnrolled);

			const feedbacks = await Fetch.getRequest<Array<Feedback>>(
				"api/mess/feedback/fetch/all",
				{ mess_id: messId }
			);
			feedbacks && setFeedbacks(feedbacks);
		})();
	}, []);

	let xRef = useRef<number>(0);
	let x = useSpring(xRef.current);

	const scrollCollectionLeft = () => {
		if (xRef.current >= 0) return;
		xRef.current += 200;
		x.set(xRef.current);
	};

	const scrollCollectionRight = () => {
		xRef.current -= 200;
		x.set(xRef.current);
	};

	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "id", text: mess?.id },
			{ label: "phone number", text: mess?.phone_number },
			{ label: "cmail", text: "mess@cmail.com" },
		],
	};

	return (
		<DashBoardTemplate navList={AdminRouterConfig} heading="Mess Profile">
			<div className="row vc mb-10">
				<div
					className="box mr-4"
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						backgroundColor: "#e7e7e7",
					}}
				></div>

				<div className="box">
					<p className="cc_24 medium" style={{ marginBottom: -4 }}>
						{mess?.name}
					</p>
					<p className="cc_16">{mess?.hostel_name}</p>
				</div>
			</div>

			<div className="row mb-10">
				<div className="col-4">{ConfigDetailsGroup(PersonalDetails)}</div>
			</div>

			<p className="cc_24 medium mb-3">Number of Students Enrolled - </p>
			<div className="row mb-3">
				<div className="box">
					<div className="searchBox vc pl-2 pr-2 mr-2">
						<input
							type="text"
							className="serachBoxInput cc_18 medium"
							placeholder="search"
							onInput={(e) => {
								setFilterControl(StateSetter.filterInput(e));
							}}
						/>
					</div>
				</div>
				<div className="box">
					<div className="button_size_m bg_black label_white ph-3 round-8">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>

			<div className="row studentListRow mt-5 mb-8">
				{filterStudentList(studentEnrolled, filterControl).map((val, index) => (
					<div className="box p-1" style={{ width: 200 }} key={index}>
						<StudentProfileList {...val} />
					</div>
				))}
			</div>

			<div className="feedbackSection mb-10">
				<Subheading text="Feedbacks" type="small" />
				<div className="feedbackCollectionRow mb-1">
					<motion.div className="feedbackCollectionBox flex " style={{ x }}>
						{feedbacks.map((feedback, index) => (
							<FeedbackCard
								key={index}
								month={DateUtils.monthMapper(
									new Date(feedback.month_of_comment).getMonth()
								)}
								text={feedback.text}
								rating={feedback.rating}
							/>
						))}
					</motion.div>
				</div>
				<div className="row mb-8">
					<div
						className="button_size_s bg_black pl-3 pr-3 label_white mr-2 round-32"
						onClick={scrollCollectionLeft}
					>
						<p className="cc_16">{"<"}</p>
					</div>
					<div
						className="button_size_s bg_black pl-3 pr-3 label_white round-32"
						onClick={scrollCollectionRight}
					>
						<p className="cc_16">{">"}</p>
					</div>
				</div>

				<div className="row">
					<div className="box">
						<p className="cc_22">Average Rating - {calcAverageRating(feedbacks)}</p>
					</div>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default AdminMessProfile;
