import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Feedback from "../../Entities/Feedback";
import Mess from "../../Entities/Mess";
import Semester_info from "../../Entities/Semester_info";
import Student from "../../Entities/Student";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import { ButtonMedium } from "../../ProjectComponents/Button";
import DetailsShadowCard from "../../ProjectComponents/DetailsShadowCard";
import FeedbackCard from "../../ProjectComponents/FeedbackCard";
import Subheading from "../../ProjectComponents/Subheading";
import { DetailsConfig } from "../../props";
import DateUtils from "../../Solutions/DateUtils";
import { Fetch } from "../../Solutions/FetchUtils";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./StudentProfile.css";

function StudentTransactionCard() {
	return (
		<div className="StudentTransactionCard round-16 p-3">
			<div className="box" style={{ width: "100%" }}>
				<div className="box">
					<p className="cc_18 medium">Mess Advance</p>
				</div>
				<div className="flex" style={{ justifyContent: "flex-end" }}>
					<p className="cc_32 mb-1 bold">20000</p>
				</div>
				<div>
					<p className="cc_18 medium">PAID</p>
				</div>
			</div>
		</div>
	);
}

function StudentProfile() {
	const { studentRollNumber } = useParams();
	const [student, setStudent] = useState<Student>();
	const [semesterDetails, setSemesterDetails] = useState<Semester_info>();
	const [messDetails, setMessDetails] = useState<Mess>();
	const [feedbacks, setFeedbacks] = useState<Array<Feedback>>([]);

	useEffect(() => {
		if (studentRollNumber == undefined) return;
		(async () => {
			const studentData = await Fetch.getRequest<Student>(
				`api/student/information/${studentRollNumber}`
			);

			if (studentData == null) return;
			setStudent(studentData);

			const semesterData = await Fetch.getRequest<Semester_info>(
				`api/student/semester_info`,
				{
					roll_number: studentRollNumber,
				}
			);
			if (semesterData == null) return;
			setSemesterDetails(semesterData);

			const messData = await Fetch.getRequest<Mess>("api/mess/fetch", {
				mess_id: semesterData.mess_id,
			});
			if (messData == null) return;
			setMessDetails(messData);

			Fetch.getRequest<Array<Feedback>>("api/mess/feedback/fetch", {
				mess_id: "XKLSEJF",
				student_roll_number: studentRollNumber,
			}).then((data) => {
				data && setFeedbacks(data);
			});
			
		})();
	}, []);

	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "phone number", text: student?.phone_number },
			{ label: "department", text: student?.department },
			{ label: "cmail id", text: "snehal@cmail.com" },
		],
	};

	const SemesterDetails = {
		heading: "Semester Details",
		rows: [
			{ label: "semester number", text: semesterDetails?.semester_number },
			// { label: "mess name", text: semesterDetails. },
			{ label: "hostel allocated", text: semesterDetails?.hostel_name },
		],
	};

	const MessDetails: DetailsConfig = {
		heading: "Mess Details",
		rows: [
			{ label: "mess name", text: messDetails?.name },
			{ label: "phone number", text: messDetails?.phone_number },
		],
	};

	return (
		<DashBoardTemplate heading="Student Profile" navList={AdminRouterConfig}>
			<div className="AdminStudentProfile">
				<div className="row mb-9">
					<div className="box mr-3">
						<div className="StudentProfileImage"></div>
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

				<div className="row mb-10 g-2">
					<div className="col-6">{ConfigDetailsGroup(PersonalDetails)}</div>
					<div className="col-6">{ConfigDetailsGroup(SemesterDetails)}</div>
					<div className="col-6">
						<DetailsShadowCard details={MessDetails} />
					</div>
				</div>

				<div className="form mb-10">
					<div className="row mb-4">
						<div className="box">
							<p className="cc_24 medium">Notify Student</p>
						</div>
					</div>
					<div className="row mb-1">
						<div className="col-3">
							<input type="text" className="form__input height-44 round-8" />
						</div>
					</div>

					<div className="row mb-1">
						<div className="col-6">
							<textarea className="form__input height-44 round-8" />
						</div>
					</div>

					<div className="row">
						<div className="box">
							<ButtonMedium label="submit" />
						</div>
					</div>
				</div>

				<div className="AdminStudentTransactions mb-10">
					<div className="row">
						<div className="box">
							<Subheading text="Feedbacks" />
							{feedbacks.map((data, index) => (
								<FeedbackCard
									month={DateUtils.monthMapper(
										new Date(data.month_of_comment).getMonth()
									)}
									text={data.text}
									rating={data.rating}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default StudentProfile;
