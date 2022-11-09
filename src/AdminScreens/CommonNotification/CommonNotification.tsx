import axios from "axios";
import React, { useEffect, useState } from "react";
import Common_mess_notification from "../../Entities/Common_mess_notification";
import Common_student_notification from "../../Entities/Common_student_notification";
import NotificationTemplate from "../../ProjectComponents/NotificationTemplate";
import Subheading from "../../ProjectComponents/Subheading";
import { Fetch } from "../../Solutions/FetchUtils";
import StateSetter from "../../Solutions/StateSetter";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./CommonNotification.css";

type NotificationPost = {
	text: string;
	title: string;
};

function CommonNotification() {
	const [messNotification, setMessNotification] = useState<
		Array<Common_student_notification>
	>([]);
	const [studentNotification, setStudentNotification] = useState<
		Array<Common_mess_notification>
	>([]);

	const [studentNotificationPost, setStudentNotificationPost] =
		useState<NotificationPost>({ title: "", text: "" });
	const [messNotificationPost, setMessNotificationPost] =
		useState<NotificationPost>({ text: "", title: "" });

	const studentSetter = new StateSetter<NotificationPost>(
		setStudentNotificationPost
	);
	const messSetter = new StateSetter<NotificationPost>(setMessNotificationPost);

	useEffect(() => {
		(async () => {
			const messNotifications = await Fetch.get<
				Array<Common_mess_notification>
			>("api/notification/common/mess");
			messNotifications && setMessNotification(messNotifications);

			const studentNotifications = await Fetch.get<
				Array<Common_mess_notification>
			>("api/notification/common/student");
			studentNotifications && setStudentNotification(studentNotifications);
		})();
	}, []);

	const createStudentNotification = () => {
		if (
			studentNotificationPost.text === "" ||
			studentNotificationPost.title === ""
		) {
			alert("either of text or title is missing");
			return;
		}

		axios
			.post(
				"http://localhost:8080/api/notification/common/student",
				studentNotificationPost
			)
			.then((data) => window.location.reload());
	};

	const createMessNotification = () => {
		if (messNotificationPost.text === "" || messNotificationPost.title === "") {
			alert("either of text or title is missing");
			return;
		}

		axios
			.post(
				"http://localhost:8080/api/notification/common/mess",
				messNotificationPost
			)
			.then((data) => window.location.reload());
	};

	console.log(messNotificationPost);

	return (
		<DashBoardTemplate
			navList={AdminRouterConfig}
			heading={"Common Notifications"}
		>
			<Subheading text="Common Notification For Student" />
			<div className="row sb mb-8">
				<div className="col-4">
					<input
						type="text"
						placeholder="title"
						className="form__input height-44 round-8 mb-1"
						onInput={messSetter.setLabel("title")}
					/>
					<input
						type="text"
						placeholder="text "
						className="form__input height-44 round-8 mb-3"
						onInput={messSetter.setLabel("text")}
					/>
					<div
						className="button_size_m bg_black round-32 label_white pl-3 pr-3"
						onClick={createMessNotification}
					>
						<p className="cc_16">submit</p>
					</div>
				</div>
				<div className="col-5 ">
					<NotificationTemplate notifications={messNotification} />
				</div>
			</div>

			<Subheading text="Common Notification For Mess" />
			<div className="row sb mb-8">
				<div className="col-4">
					<input
						type="text"
						placeholder="title"
						className="form__input height-44 round-8 mb-1"
						onInput={studentSetter.setLabel("title")}
					/>
					<input
						type="text"
						placeholder="text "
						className="form__input height-44 round-8 mb-3"
						onInput={studentSetter.setLabel("text")}
					/>
					<div
						className="button_size_m bg_black round-32 label_white pl-3 pr-3"
						onClick={createStudentNotification}
					>
						<p className="cc_16">submit</p>
					</div>
				</div>
				<div className="col-5 ">
					<NotificationTemplate notifications={studentNotification} />
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default CommonNotification;
