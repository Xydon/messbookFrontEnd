import React from "react";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./Cancellation.css";

function StudentProfileList() {
  return(
    <div className="studentProfileListContainer row vc cp">
      <div className="profileImageBox mr-2"></div>
      <div className="profileTextBox">
        <p className="cc_18">Snehal Kumar Singh</p>
        <p className="cc_14">Hostel Name</p>
      </div>
    </div>
  )
}

function Cancellation() {
	return (
		<DashBoardTemplate navList={[]} heading="Cancellation">
			<div className="row vc mb-8">
				<div className="box mr-3">
					<p className="cc_27 medium">Students not eating on - </p>
				</div>
				<div className="box">
					<input type="date" />
				</div>
			</div>
      <Subheading type="small"  text="count-30"/>
      <div className="studentListRow row mt-5">
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

export default Cancellation;
