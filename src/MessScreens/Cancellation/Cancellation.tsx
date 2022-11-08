import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Student from "../../Entities/Student";
import Subheading from "../../ProjectComponents/Subheading";
import DateUtils from "../../Solutions/DateUtils";
import { Fetch } from "../../Solutions/FetchUtils";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";

import "./Cancellation.css";

function StudentProfileList(props: Student) {
	return (
		<Link to={`/studentProfile/${props.roll_number}`}>
			<div className="row vc cp">
				<div className="profileImageBox mr-2"></div>
				<div className="profileTextBox">
					<p className="cc_18">{props.name}</p>
					<p className="cc_14">{props.roll_number}</p>
				</div>
			</div>
		</Link>
	);
}

function Cancellation() {
	const [date, setDate] = useState<Date>(new Date());

	const [studentList, setStudentList] = useState<Array<Student>>([]);

	useEffect(() => {
		Fetch.getRequest<Array<Student>>("api/mess/absentList", {
			mess_id: "XKLSEJF",
			date: DateUtils.jsonDateFormat(date),
		}).then((data) => data && setStudentList(data));
	}, [date.toISOString()]);

	return (
		<DashBoardTemplate navList={MessRouterConfig} heading="Cancellation">
			<div className="row vc mb-8">
				<div className="box mr-3">
					<p className="cc_27 medium">Students not eating on - </p>
				</div>
				<div className="box">
					<input
						type="date"
						onInput={(e) =>
							setDate(new Date((e.target as HTMLInputElement).value))
						}
					/>
				</div>
			</div>
			<Subheading type="small" text="count-30" />
			<div className="studentListRow row ">
				{studentList.map((student, index) => {
					return <StudentProfileList key={index} {...student} />;
				})}
			</div>
		</DashBoardTemplate>
	);
}

export default Cancellation;
