import React from "react";
import Notification from "../../ProjectComponents/Notification";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./MessProfile.css";

function MessProfile() {
	return (
		<DashBoardTemplate heading="Profile" navList={[]}>
			<div className="row mb-5">
				<div className="box">
					<Notification />
				</div>
			</div>

			<div className="row">
				<div className="col-6">
					<Subheading text="Details"/>

					<div className="row mb-2">
						<div className="profileImageBox"></div>
					</div>
				</div>
				
				<div className="col-6">
          <Subheading text="Semester Details" />
          <Subheading text="Starts On" type="small" />
        </div>
			</div>
		</DashBoardTemplate>
	);
}

export default MessProfile;
