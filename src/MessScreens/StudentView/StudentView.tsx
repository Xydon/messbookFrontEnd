import React from "react";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./StudentView.css";

function StudentProfileList() {
  return(
    <div className="studentProfileListContainer row vc">
      <div className="profileImageBox mr-2"></div>
      <div className="profileTextBox">
        <p className="cc_18">Snehal Kumar Singh</p>
        <p className="cc_14">Hostel Name</p>
      </div>
    </div>
  )
}

export function StudentView() {
	return (
		<DashBoardTemplate heading="Students" navList={[]}>
			<Subheading text="Number of Students Enrolled - " />
			<div className="row mb-3">
				<div className="box">
					<div className="searchBox vc pl-2 pr-2 mr-2">
						<input
							type="text"
							className="serachBoxInput cc_18 medium"
							placeholder="search"
						/>
					</div>
				</div>
				<div className="box">
					<div className="button_size_m bg_black label_white ph-3 round-8">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>

      <div className="row studentListRow mt-5">
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
        <StudentProfileList/>
      </div>
		</DashBoardTemplate>
	);
}
