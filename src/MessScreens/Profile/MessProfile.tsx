import React from "react";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import Notification from "../../ProjectComponents/Notification";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";

import "./MessProfile.css";

function MessProfile() {
	const DetailsConfig = {
		heading : 'Details', 
		rows : [
			{label : 'Name', text : 'sunderlal'}, 
			{label : 'Hostel Name', text : 'hostel name'}, 
			{label : 'Phone Number', text : '9369074016'}, 
			{label : 'C Mail Id', text : 'mess@cmail.com'}, 
		]
	}

	return (
		<DashBoardTemplate heading="Profile" navList={MessRouterConfig}>
			<div className="row mb-5">
				<div className="box p-2">
					<Notification />
				</div>

				<div className="col-6 p-2 pl-10">
					{ConfigDetailsGroup(DetailsConfig)}
				</div>

				<div className="col-6 p-5">
					<Subheading text="Semester Details" />
					<Subheading text="Starts On" type="small" />
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default MessProfile;
