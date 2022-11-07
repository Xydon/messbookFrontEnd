import React, { useEffect, useState } from "react";

import "./Profile.css";

import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AssetStore from "../../assets/AssetStore";
import Notification from "../../ProjectComponents/Notification";
import StudentRouteConfig from "../RouterConfig";
import ProfileName from "../../ProjectComponents/ProfileName";
import DetailsShadowCard from "../../ProjectComponents/DetailsShadowCard";
import { DetailsConfig, DetailsRowData } from "../../props";
import Student from "../../Entities/Student";
import Hostel from "../../Entities/Hostel";
import Semester_details from "../../Entities/Semester_details";
import Department from "../../Entities/Department";
import { Fetch } from "../../Solutions/FetchUtils";
import DateUtils from "../../Solutions/DateUtils";
import InfoCard from "../../ProjectComponents/InfoCard";
import Semester_info from "../../Entities/Semester_info";

function Profile() {
	const [studentDetails, setStudentDetails] = useState<Student>();
	const [hostelDetails, setHostelDetails] = useState<Hostel>();
	const [semesterDetails, setSemesterDetails] = useState<Semester_details>();
	const [departmentDetails, setDepartmentDetails] = useState<Department>();
	const [hasPaidAdvance, setHasPaidAdvance] = useState<boolean>();

	useEffect(() => {
		(async () => {
			const studentData = await Fetch.getRequest<Student>(
				"api/student/information/20075087"
			);
			if (studentData === null) return;
			setStudentDetails(studentData);

			const hostelData = await Fetch.getRequest<Hostel>("api/student/hostel", {
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

			const semesterInfoData = await Fetch.getRequest<Semester_info>(
				"api/student/semester_info",
				{
					roll_number: "20075087",
				}
			);
			if (semesterInfoData === null) setHasPaidAdvance(false);
			else setHasPaidAdvance(semesterInfoData.mess_advance_paid === 0);
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
			new DetailsRowData(
				"Started On",
				DateUtils.fetchDateValue(semesterDetails?.start_date)
			),
			new DetailsRowData(
				"Ends On",
				DateUtils.fetchDateValue(semesterDetails?.end_date)
			),
			new DetailsRowData("Price Per Meal", semesterDetails?.price_per_meal),
			new DetailsRowData(
				"Mess Advance Price",
				semesterDetails?.mess_advance_price
			),
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
			new DetailsRowData("Department Name", departmentDetails?.name),
			new DetailsRowData("Head Of Department", departmentDetails?.hod),
			new DetailsRowData("Location Of Department", departmentDetails?.location),
			new DetailsRowData("Phone Number", departmentDetails?.phone),
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
						{hasPaidAdvance ? (
							<InfoCard
								icon={<AssetStore.CircleTick />}
								text="mess advance paid"
							/>
						) : (
							<InfoCard
								icon={<AssetStore.Exclamation />}
								text="mess advance paid"
							/>
						)}
					</div>
				</div>

				<div className="row mb-9 g-2" style={{marginLeft : -16}}>
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
