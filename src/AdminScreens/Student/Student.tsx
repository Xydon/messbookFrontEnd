import React, { useEffect, useState } from "react";

import "./Student.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Student from "../../Entities/Student";
import ExtendibleDashboardTempalte from "../../Templates/ExtendibleDashboardTemplate";

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

function StudentView() {
	const [data, setData] = useState<Array<Student>>([]);

	useEffect(() => {
		axios.get("http://localhost:8080/api/student/all").then((rawData) => {
			let { data } = rawData;
			if (data.error.errorCode == "FAILED") return;
			setData(data.response);
		});
	}, []);

	return (
		<ExtendibleDashboardTempalte navList={[]}>
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
					/>
					<input
						type="text"
						className="input_size_m round-8 mb-2 mr-1 form__input filterControl__name"
						placeholder="name"
					/>
					<input
						type="number"
						className="input_size_m round-8 mb-2 mr-2 form__input filterControl__semester"
						placeholder="semester"
					/>
					<div className="button_size_m round-16 label_white filterControlApplyButton">
						<p className="cc_16">apply</p>
					</div>
				</div>

				<div className="Student__Subheading mb-2">
					<p className="cc_22 medium">Student List</p>
				</div>

				<div className="Student__studentList__box row">
					{data.map((student, index) => (
						<StudentProfileList key={index} student={student} />
					))}
				</div>
			</div>
		</ExtendibleDashboardTempalte>
	);
}

export default StudentView;
