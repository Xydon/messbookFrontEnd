import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Student from "../../Entities/Student";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";
import { fetchStudents } from "./fetch";
import { filterStudentList } from "./logics";

import "./StudentView.css";

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

export function StudentView() {
	// data
	const [students, setStudents] = useState<Array<Student>>([]);
	const [filterControl, setFilterControl] = useState<string>("");


	useEffect(() => {
		fetchStudents().then((data) => {
			console.log(data);
			setStudents(data);
		});
	}, []);

	return (
		<DashBoardTemplate heading="Students" navList={MessRouterConfig}>
			<Subheading text={`Number of Students Enrolled - ${students.length}`} />
			<div className="messStudentView">
				<div className="row mb-3">
					<div className="box">
						<div className="searchBox vc pl-2 pr-2 mr-2">
							<input
								type="text"
								className="serachBoxInput cc_18 medium"
								placeholder="search"
								onChange={(e) => {
									e.preventDefault();
									setFilterControl(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="box">
						<div className="button_size_m bg_black label_white ph-3 round-8">
							<p className="cc_16">submit</p>
						</div>
					</div>
				</div>

				<div className="row messStudentView__studentListRow mt-5">
					{filterStudentList(students, filterControl).map((val, index) => (
						<div className="box p-2" style={{width : 200}}>
							<StudentProfileList key={index} {...val} />
						</div>
					))}
				</div>
			</div>
		</DashBoardTemplate>
	);
}
