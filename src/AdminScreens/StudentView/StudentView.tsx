import React from "react";

import { useParams } from "react-router-dom";

function StudentView() {
	const { studentRoll } = useParams();

	return (
		<div className="Dashboard">
			<div className="Dashboard__sideBoard"></div>
			<div className="Dashboard__content">
				<div className="Dashboard__heading__row">
					<div className="box">
						<p className="cc_37 bold ScreenHeading">Student Details</p>
					</div>
				</div>
				<div className="mb-4">
					<p className="cc_22 medium mb-1">Roll Number</p>
          <p className="cc_18">20075087</p>
				</div>
				<div className="mb-4">
					<p className="cc_22 medium mb-1">Name</p>
          <p className="cc_18">Snehal Kumar Singh</p>
				</div>
				<div className="mb-4">
					<p className="cc_22 medium mb-1">Phone Number</p>
          <p className="cc_18">+91 9369074016</p>
				</div>
				<div className="mb-4">
					<p className="cc_22 medium mb-1">Department</p>
          <p className="cc_18">C.S.E</p>
				</div>
			</div>
		</div>
	);
}

export default StudentView;
