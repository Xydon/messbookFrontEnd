import React from "react";

import "./Profile.css";


import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AssetStore from "../../assets/AssetStore";
import Notification from "../../ProjectComponents/Notification";

function InfoCard(props : {icon : React.ReactNode, text : string}) {
	return(
		<div className="infoCardContainer round-8 pl-3 pr-3 vc">
				{props.icon}
			<div className="iconBox mr-2" />
			<div className="messageTextBox">
				<p className="cc_18 medium">{props.text}</p>
			</div>
		</div>
	)
}

function Profile() {
	return (
		<DashBoardTemplate navList={[]} heading="Profile">
			<div className="Proflie">

				<p className="cc_27 medium Profile__subheading mb-5">Semester - 4</p>

				<div className="row mb-5">
					<div className="box mr-3	">
						<InfoCard icon={<AssetStore.CircleTick/>} text="mess advance paid" />
					</div>
					<div className="box">
						<InfoCard icon={<AssetStore.Exclamation/>} text="mess advance paid" />
					</div>
				</div>

				<div className="row">
					<Notification/>
				</div>

				<div className="Profile__Details">
					<p className="cc_27 medium Profile__subheading mb-4">Details</p>
					<div className="Profile__image mb-2"></div>
					<p className="cc_18 Profile_subheading mb-5"> Name - Lauda Singh</p>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default Profile;
