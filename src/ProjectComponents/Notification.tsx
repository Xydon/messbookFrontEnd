import React from "react";
import { NotificationProp } from "../props";

import "./Notification.css";

function NotificationList() {
	return (
		<div className="row NotificationList mb-1">
			<div className="col-2 titleBox pr-3">
				<p className="cc_16">Title</p>
				<p className="cc_11">12/08/2022</p>
			</div>
			<div className=" col pl-3">
				<p className="cc_14">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nisi?
				</p>
			</div>
		</div>
	);
}

function Notification() {
	return (
		<div className="round-16 p-5 notificationWrapper">
			<p className="cc_22 medium mb-3">Notification</p>
			<div className="notificationContainer">
				<NotificationList />
				<NotificationList />
				<NotificationList />
				<NotificationList />
			</div>
		</div>
	);
}

export default Notification;
