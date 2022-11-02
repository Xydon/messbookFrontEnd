import React from "react";

import { useParams } from "react-router-dom";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

function StudentProfile() {
	const { studentRoll } = useParams();

	return (
		<DashBoardTemplate heading="Student Profile" navList={[]}>
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
			<div className="mb-6">
				<p className="cc_22 medium mb-1">Department</p>
				<p className="cc_18">C.S.E</p>
			</div>
			<div className="mb-6">
				<p className="cc_22 medium mb-1">C-Mail Id</p>
				<p className="cc_18">C.S.E</p>
			</div>
		</DashBoardTemplate>
	);
}

export default StudentProfile;
