import React, { useEffect, useState } from "react";
import NotificationEntity from "../Entities/Notification";
import { NotificationProp } from "../props";
import DateUtils from "../Solutions/DateUtils";
import { Fetch } from "../Solutions/FetchUtils";

import "./Notification.css";

function NotificationList(props: NotificationEntity) {
	return (
		<div className="row NotificationList mb-1">
			<div className="col-3 titleBox pr-3">
				<p className="cc_16">{props.title}</p>
				<p className="cc_11">{DateUtils.fetchDateValue(props.date)}</p>
			</div>
			<div className=" col pl-3">
				<p className="cc_14">{props.text}</p>
			</div>
		</div>
	);
}

class FetchNotification extends Fetch {
	getStudentNotifications(roll_number: string) {
		return Fetch.getRequest<Array<NotificationEntity>>(
			"api/notifications/student",
			{ roll_number }
		);
	}
}

function Notification(props: {
	benefactor: "student" | "mess" | undefined;
	roll_number?: string;
	mess_id?: string;
}) {
	const fetcherUtil = new FetchNotification();
	const [notifications, setNotifications] = useState<Array<NotificationEntity>>(
		[]
	);

	useEffect(() => {
		props.roll_number &&
			fetcherUtil
				.getStudentNotifications(props.roll_number)
				.then((data) => data && setNotifications(data));
	}, []);

	return (
		<div className="round-16 p-5 notificationWrapper">
			<p className="cc_22 medium mb-3">Notification</p>
			<div className="notificationContainer">
				{notifications.map((notificationData, index) => (
					<NotificationList {...notificationData} key={index} />
				))}
			</div>
		</div>
	);
}

export default Notification;
