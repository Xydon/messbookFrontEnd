import React, { useEffect, useState } from "react";

import "./Student.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Student from "../../Entities/Student";


function StudentAdd() {
	const navigate = useNavigate();
	const [data, setData] = useState<Array<Student>>([]);

	useEffect(() => {
		try {
			axios
			.get("http://localhost:8080/api/admin/students/1")
			.then((val) => setData(val.data));
		} catch(e) {
			console.log(e); 		
		}
	}, []);

	return (
		<div className="Student row">
			<div className="Student__sidebar"></div>
			<div className="Student__content">
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

				<div className="Student__studentList__box">
					{data.map((val, index) => (
						<div
							className="Student__studentList__row mb-1 flex vc"
							onClick={() => {
								navigate("/20075087");
							}}
							key={index}
						>
							<div className="studentList__rollNo__box">
								<p className="studentList__rollNo cc_14 mr-2">{val.roll_number}</p>
							</div>

							<div className="studentList__info__box">
								<div className="studentList__info flex vc pl-4 pr-8">
									<p className="cc_16">{val.name}</p>
									<p className="cc_16">{val.department}</p>
								</div>	
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default StudentAdd;
