import React from "react";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./StudentAdd.css";

function StudentAdd() {
	return (
		<DashBoardTemplate navList={AdminRouterConfig} heading={"Add Student"}>
			<Subheading text="Student Personal Details" />
			<div className="row g-1 mb-4">
				<div className="col-5">
					<input
						type="text"
						className="form__input mb-1 round-8 height-44"
						placeholder="roll_number"
					/>
				</div>
				<div className="col-5">
					<input type="text" className="form__input mb-1 round-8 height-44" placeholder="name" />
				</div>
				<div className="col-5">
					<input
						type="text"
						className="form__input mb-1 round-8 height-44"
						placeholder="phone number"
					/>
				</div>
				<div className="col-5">
					<input
						type="text"
						className="form__input mb-1 round-8  height-44"
						placeholder="department"
					/>
				</div>
				<div className="col-5">
					<input
						type="text"
						className="form__input mb-1 round-8  height-44"
						placeholder="gender"
					/>
				</div>
			</div>

			<div className="button_size_l bg_black label_white round-16 pl-3 pr-3">
				<p className="cc_16">enter student</p>
			</div>
		</DashBoardTemplate>
	);
}

export default StudentAdd;
