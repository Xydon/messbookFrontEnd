import React from "react";

import "./Profile.css";

import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AssetStore from "../../assets/AssetStore";
import Notification from "../../ProjectComponents/Notification";
import StudentRouteConfig from "../RouterConfig";
import ProfileName from "../../ProjectComponents/ProfileName";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import DetailsShadowCard from "../../ProjectComponents/DetailsShadowCard";
import { DetailsConfig, DetailsRowData } from "../../props";

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
	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "phone number", text: "9369074016" },
			{ label: "department", text: "cse" },
			{ label: "cmail id", text: "snehal@cmail.com" },
		],
	};

	const SemesterDetails: DetailsConfig = {
		heading: "Semester Details",
		rows: [
			new DetailsRowData("Started On", "11/11/11"),
			new DetailsRowData("Ends On", "11/11/11"),
			new DetailsRowData("Price Per Meal", 60),
			new DetailsRowData("Mess Advance Price", 12000),
		],
	};

	const HostelDetails : DetailsConfig = {
		heading :"Hostel Details", 
		rows : [
			new DetailsRowData("Hostel Name", "S.N. Bose"), 
			new DetailsRowData("Warden Name", "Christopher Vance"), 
			new DetailsRowData("Warden Phone Number", "93699409464"),
			new DetailsRowData("Hostel Type", "girls hostel")
		]
	}

	const DepartmentDetails :DetailsConfig = {
		heading: "Department Details",
		rows: [
			new DetailsRowData("Department Name", "C.S.E"), 
			new DetailsRowData("Head Of Department", "SKS"), 
			new DetailsRowData("Location Of Department", "iit bhu"), 
			new DetailsRowData("Phone Number", "96551519819")
		]
	}

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
