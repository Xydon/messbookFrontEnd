import React from "react";
import { ButtonLarge } from "../../ProjectComponents/Button";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import ExtendibleDashboardTempalte from "../../Templates/ExtendibleDashboardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./Semester.css";

function SemesterViewCard() {
  return (
    <div className="SemesterViewCard round-16 p-4">
      <p className="cc_22 semi_bold mb-3">Semester - id</p>
      <p className="cc_16">duration - dd/mm/yyyy to dd/mm/yyyy</p>
    </div>
  ); 
}

function Semester() {
	return (
		<ExtendibleDashboardTempalte navList={AdminRouterConfig}>
			<div className="SemesterView Dashboard__content">
				<div className="row Dashboard__heading__row sb">
					<p className="cc_37 semi_bold">Semesters</p>
					<ButtonLarge label="create new" />
				</div>

        <SemesterViewCard/>


			</div>
		</ExtendibleDashboardTempalte>
	);
}

export default Semester;
