import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feedback from "../../Entities/Feedback";
import Student from "../../Entities/Student";
import AbsentCalculator from "../../ProjectComponents/AbsentCalculator";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import Card from "../../ProjectComponents/Card";
import FeedbackCard from "../../ProjectComponents/FeedbackCard";
import Subheading from "../../ProjectComponents/Subheading";
import { DetailsConfig } from "../../props";
import DateUtils from "../../Solutions/DateUtils";
import { Fetch } from "../../Solutions/FetchUtils";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";
import { getProfileDetails } from "./fetch";

import "./MessStudentProfile.css";

function StudentProfile() {
	// data
	const [student, setStudent] = useState<Student>();
	const [feedback, setFeedback] = useState<Array<Feedback>>([]);

	const { rollNumber } = useParams();

	useEffect(() => {
		if (rollNumber) {
			getProfileDetails(rollNumber).then(
				(data) => data !== null && setStudent(data)
			);
		}
		rollNumber &&
			Fetch.getRequest<Array<Feedback>>("api/mess/feedback/fetch", {
				mess_id: "XKLSEJF",
				student_roll_number: rollNumber,
			}).then((data) => {
				data && setFeedback(data);
			});
	}, []);

	const PersonalDetails: DetailsConfig = {
		heading: "Personal Details",
		rows: [
			{ label: "phone number", text: student?.phone_number },
			{ label: "department", text: student?.department },
			{ label: "cmail id", text: "snehal@cmail.com" },
		],
	};

	return (
		<DashBoardTemplate heading="Student Profile" navList={MessRouterConfig}>
			<div className="row mb-9">
				<div className="box mr-3">
					<div
						style={{
							width: 100,
							height: 100,
							borderRadius: 50,
							backgroundColor: "#e7e7e7",
						}}
					></div>
				</div>
				<div className="box vc">
					<div>
						<p className="cc_22 medium">{student?.name}</p>
						<p className="cc_16 medium" style={{ marginTop: -3 }}>
							{student?.roll_number}
						</p>
					</div>
				</div>
			</div>
			<div className="row mb-5">
				<div className="col pt-9">{ConfigDetailsGroup(PersonalDetails)}</div>
				<div className="col hc">
					<AbsentCalculator />
				</div>
			</div>

			<div className="row">
				<div className="box">
					<Subheading text="Feedbacks" />
				</div>
			</div>
			<div className="row mb-3 g-1">
				<div className="box">
					{feedback.map((data) => (
						<FeedbackCard
							month={DateUtils.monthMapper(
								new Date(data.month_of_comment).getMonth()
							)}
							text={data.text}
							rating={data.rating}
						/>
					))}
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default StudentProfile;
