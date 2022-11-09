import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mess_change_application from "../../Entities/Mess_change_application";
import Student from "../../Entities/Student";
import { Fetch } from "../../Solutions/FetchUtils";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./MessChangeApplication.css";

type MessChangeApplicationType = {
	studentName: string;
	studentHostel: string;
	studentRollNumber: string;
	studentDepartment: string;
	changeToMessName: string;
	changeToMessId: string;
	reason: string;
};

function MessChangeApplcationCard(props: Mess_change_application) {
	const navigate = useNavigate();
	return (
		<div className="messChangeApplicationContainer p-3 round-16">
			<p className="cc_18 semi_bold">
				Student Roll Number - {props.student_roll_number}
			</p>
			<div
				className="row vc mb-4"
				onClick={() => navigate(`/studentProfile/${props.student_roll_number}`)}
			>
				<p className="cc_16 semi_bold cp">view</p>
			</div>

			<div className="row vc mb-1">
				<p className="cc_16 medium mr-2">Change To Mess Id</p>
				<p className="cc_16 mr-4">{props.mess_id}</p>
				<div
					className="button_size_s round-8 label_white bg_black pl-3 pr-3"
					onClick={() => navigate(`/mess/${props.mess_id}`)}
				>
					<p className="cc_14">view</p>
				</div>
			</div>

			<div className="row vc mb-1">
				<p className="cc_16 medium mr-2">Reason</p>
			</div>

			<div className="row mb-3">
				<div className="box">
					<p className="cc_14" style={{ color: "#444444" }}>
						{props.reason}
					</p>
				</div>
			</div>

			<div className="row">
				<div className="button_size_s round-32 bg_black label_white pl-3 pr-3 mr-2">
					<p className="cc_14">accept</p>
				</div>
				<div
					className="button_size_s round-32 pl-3 pr-3 mr-3"
					style={{ border: "1px solid black" }}
				>
					<p className="cc_14">reject</p>
				</div>
			</div>
		</div>
	);
}

function MessChangeApplication() {
	const [messChange, setMessChange] = useState<Array<Mess_change_application>>(
		[]
	);
	const [student, setStudent] = useState<Student>();

	useEffect(() => {
		(async () => {
			const messChanges = await axios.get<Array<Mess_change_application>>(
				"http://localhost:8080/api/mess/change"
			);
			if (messChanges.data === null) return;
			setMessChange(messChanges.data);
		})();
	}, []);

	return (
		<DashBoardTemplate
			heading="Mess Change Application"
			navList={AdminRouterConfig}
		>
			{messChange.map((val, index) => (
				<MessChangeApplcationCard {...val} key={index} />
			))}
		</DashBoardTemplate>
	);
}

export default MessChangeApplication;
