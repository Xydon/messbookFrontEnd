import React, { useEffect, useState } from "react";

import "./Student.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Student from "../../Entities/Student";
import ExtendibleDashboardTempalte from "../../Templates/ExtendibleDashboardTemplate";
import AdminRouterConfig from "../routerConfig";
import StateSetter from "../../Solutions/StateSetter";

function StudentProfileList({ student }: { student: Student }) {
	const navigate = useNavigate();

	return (
		<div
			className="row vc mr-3 mb-2 cp"
			onClick={() => {
				student.roll_number &&
					navigate(`/studentProfile/${student.roll_number}`);
			}}
		>
			<div className="profileImageBox mr-2"></div>
			<div className="profileTextBox">
				<p className="cc_18">{student.name}</p>
				<div className="row" style={{ marginTop: -3 }}>
					<p className="cc_14 mr-2">{student.department}</p>
					<p className="cc_14">{student.roll_number}</p>
				</div>
			</div>
		</div>
	);
}

type FilterConfig = {
	department?: string;
	roll_number?: string;
	name?: string;
};

function filterStudentList(studeltList: Array<Student>, config: FilterConfig) {
	return studeltList.filter((student) => {
		console.log(config.department, student.department);

		if (
			config.department &&
			!student.department
				.toLowerCase()
				.includes(config.department.toLowerCase())
		)
			return false;

		if (
			config.roll_number &&
			!student.roll_number
				.toLowerCase()
				.includes(config.roll_number.toLowerCase())
		)
			return false;

		if (
			config.name &&
			!student.name
				.toLowerCase()
				.includes(config.name.toLowerCase())
		)
			return false;

		return true;
	});
}

function StudentView() {
	const [data, setData] = useState<Array<Student>>([]);
	const [filterConfig, setFilterConfig] = useState<FilterConfig>({});

	console.log(filterConfig);

	const setter = new StateSetter<FilterConfig>(setFilterConfig);

	useEffect(() => {
		axios.get("http://localhost:8080/api/student/all").then((rawData) => {
			let { data } = rawData;
			if (data.error.errorCode == "FAILED") return;
			setData(data.response);
		});
	}, []);

	return (
		<ExtendibleDashboardTempalte navList={AdminRouterConfig}>
			<div className=" Student Student__content">
				<div className="content__heading__row row">
					<div className="heading__headingText__box">
						<p className="cc_37 bold ScreenHeading">Students</p>
					</div>

					<Link to="/studentAdd">
						<div className="heading__button__box">
							<div className="heading__AddStudentButton button_size_m round-16 label_white">
								<p className="cc_16">create new</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="Student__Subheading mb-2">
					<p className="cc_32 medium">Filter</p>
				</div>

				<div className="Student__filterControl__row row mb-6">
					<input
						type="number"
						className="input_size_m round-8 mb-2 mr-1 form__input filterControl__rollNumber"
						placeholder="roll number"
						onInput={setter.setLabel("roll_number")}
					/>
					<input
						type="text"
						className="input_size_m round-8 mb-2 mr-1 form__input filterControl__name"
						placeholder="name"
						onInput={setter.setLabel("name")}
					/>
					<input
						type="text"
						className="input_size_m round-8 mb-2 mr-2 form__input filterControl__semester"
						placeholder="department"
						onInput={setter.setLabel("department")}
					/>
					<div className="button_size_m round-16 label_white filterControlApplyButton">
						<p className="cc_16">apply</p>
					</div>
				</div>

				<div className="Student__Subheading mb-2">
					<p className="cc_22 medium">Student List</p>
				</div>

				<div className="Student__studentList__box row">
					{filterStudentList(data, filterConfig).map((student, index) => (
						<StudentProfileList key={index} student={student} />
					))}
				</div>
			</div>
		</ExtendibleDashboardTempalte>
	);
}

export default StudentView;
