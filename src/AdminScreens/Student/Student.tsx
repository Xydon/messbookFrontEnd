import React from "react";

import "./Student.css";

import { Link } from "react-router-dom";

function StudentAdd() {
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
			</div>
		</div>
	);
}

export default StudentAdd;
