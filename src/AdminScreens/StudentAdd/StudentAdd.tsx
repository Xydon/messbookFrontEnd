import React from "react";

import "./StudentAdd.css";

function StudentAdd() {
	return (
		<div className="StudentAdd row">
			<div className="StudentAdd__sidebar"></div>
			<div className="StudentAdd__content">
				<div className="content__heading__row row">
					<div className="heading__headingText__box">
						<p className="cc_37 bold ScreenHeading">Add Student</p>
					</div>
				</div>

				<div className="content__form__box">
					<p className="formHeading cc_27 mb-5">Enter Details</p>
					<input type="number" className="input_size_m round-8 mb-2 form__input" placeholder="roll number" />
					<input type="text" className="input_size_m round-8 mb-2 form__input form__input_name" placeholder="name" />
					<input type="number" className="input_size_m round-8 mb-2 form__input form__input_phoneNumber" placeholder="phone number" />
					<input type="text" className="input_size_m round-8 mb-3 form__input form__input_gender" placeholder="gender" />

					<div className="button_size_m  label_white ph-5 submitButton round-16">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentAdd;
