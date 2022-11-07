import React, { useEffect, useState } from "react";

import "./Profile.css";

import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AssetStore from "../../assets/AssetStore";
import Notification from "../../ProjectComponents/Notification";
import StudentRouteConfig from "../RouterConfig";
import ProfileName from "../../ProjectComponents/ProfileName";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import DetailsShadowCard from "../../ProjectComponents/DetailsShadowCard";
import { DetailsConfig, DetailsRowData } from "../../props";
import Student from "../../Entities/Student";
import Hostel from "../../Entities/Hostel";
import Semester_details from "../../Entities/Semester_details";
import Department from "../../Entities/Department";
import { Fetch } from "../../Solutions/FetchUtils";
import axios from "axios";

function InfoCard(props: { icon: React.ReactNode; text: string }) {
	return (
		<div className="infoCardContainer round-8 pl-3 pr-3 vc">
			{props.icon}
			<div className="iconBox mr-2" />
			<div className="messageTextBox">
				<p className="cc_18 medium">{props.text}</p>
			</div>
		</div>
	);
}

function Profile() {
	const [studentDetails, setStudentDetails] = useState<Student>();
	const [hostelDetails, setHostelDetails] = useState<Hostel>();
	const [semesterDetails, setSemesterDetails] = useState<Semester_details>();
	const [departmentDetails, setDepartmentDetails] = useState<Department>();

	useEffect(() => {
		(async () => {
			const studentData = await Fetch.getRequest<Student>(
				"api/student/information/20075087"
			);
			if (studentData === null) return;
			setStudentDetails(studentData);

			const hostelData = await Fetch.get<Hostel>("api/student/hostel", {
				roll_number: "20075087",
			});
			console.log(hostelData); 
			if (hostelData === null) return;
			setHostelDetails(hostelData);

			const semesterDetails = await Fetch.getRequest<Semester_details>(
				"api/semester/latestSemester"
			);
			if (semesterDetails === null) return;
			setSemesterDetails(semesterDetails);

			const departmentData = await Fetch.getRequest<Department>(
				`api/college/department/${studentData.department}`
			);
			if (departmentData === null) return;
			setDepartmentDetails(departmentData);

		})(); 
	}, []);

	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "phone number", text: studentDetails?.phone_number },
			{ label: "department", text: studentDetails?.department },
			{ label: "cmail id", text: "snehal@cmail.com" },
		],
	};

	const SemesterDetails: DetailsConfig = {
		heading: "Semester Details",
		rows: [
			new DetailsRowData("Started On", '11/11/11'),
			new DetailsRowData("Ends On", "11/11/11"),
			new DetailsRowData("Price Per Meal", 60),
			new DetailsRowData("Mess Advance Price", 12000),
		],
	};

	const HostelDetails: DetailsConfig = {
		heading: "Hostel Details",
		rows: [
			new DetailsRowData("Hostel Name", hostelDetails?.name),
			new DetailsRowData("Warden Name", hostelDetails?.warden_name),
			new DetailsRowData("Warden Phone Number", hostelDetails?.warden_phone),
			new DetailsRowData("Hostel Type", hostelDetails?.gender),
		],
	};

	const DepartmentDetails: DetailsConfig = {
		heading: "Department Details",
		rows: [
			new DetailsRowData("Department Name", "C.S.E"),
			new DetailsRowData("Head Of Department", "SKS"),
			new DetailsRowData("Location Of Department", "iit bhu"),
			new DetailsRowData("Phone Number", "96551519819"),
		],
	};

	return (
		<DashBoardTemplate navList={StudentRouteConfig} heading="Profile">
			<div className="Proflie">
				<div className="row mb-9">
					<div className="box">
						<ProfileName name="Snehal Kumar Singh" subInfo="20075087" />
					</div>
				</div>

				<p className="cc_27 medium Profile__subheading mb-5">Semester - 4</p>

				<div className="row mb-5">
					<div className="box mr-3	">
						<InfoCard
							icon={<AssetStore.CircleTick />}
							text="mess advance paid"
						/>
					</div>
					<div className="box">
						<InfoCard
							icon={<AssetStore.Exclamation />}
							text="mess advance paid"
						/>
					</div>
				</div>

				<div className="row mb-9 g-2">
					<div className="col">
						<Notification />
					</div>
					<div className="col-6">
						<DetailsShadowCard details={PersonalDetails} />
					</div>
					<div className="col-6">
						<DetailsShadowCard details={SemesterDetails} />
					</div>
					<div className="col-6">
						<DetailsShadowCard details={HostelDetails} />
					</div>
					<div className="col-6">
						<DetailsShadowCard details={DepartmentDetails} />
					</div>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default Profile;
