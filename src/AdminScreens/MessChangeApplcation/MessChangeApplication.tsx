import React from "react";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./MessChangeApplication.css";

function MessChangeApplcationCard() {
	return (
		<div className="messChangeApplicationContainer p-3 round-16">
			<p className="cc_18 semi_bold">Student Name</p>
			<div className="row vc mb-4">
				<p className="cc_16">C.S.E</p>
				<div className="separator"></div>
				<p className="cc_16">20075087</p>
			</div>

			<div className="row mb-1">
				<p className="cc_16 medium mr-2">Hostel</p>
				<p className="cc_16">Vishveshwariya</p>
			</div>

			<div className="row vc mb-1">
				<p className="cc_16 medium mr-2">Change To</p>
				<p className="cc_16 mr-4">name of mess</p>
				<div className="button_size_s round-8 label_white bg_black pl-3 pr-3">
					<p className="cc_14">view</p>
				</div>
			</div>

			<div className="row vc mb-1">
				<p className="cc_16 medium mr-2">Reason</p>
			</div>

			<div className="row mb-3">
				<div className="box">
					<p className="cc_14" style={{color : '#444444'}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem hic a esse eos pariatur ducimus numquam praesentium inventore necessitatibus.
					</p>
				</div>
			</div>

      <div className="row">
        <div className="button_size_s round-32 bg_black label_white pl-3 pr-3 mr-2">
          <p className="cc_14">accept</p>
        </div>
        <div className="button_size_s round-32 pl-3 pr-3 mr-3" style={{border : '1px solid black'}}>
          <p className="cc_14">reject</p>
        </div>
      </div>
		</div>
	);
}

function MessChangeApplication() {
	return (
		<DashBoardTemplate heading="Mess Change Application" navList={[]}>
			<MessChangeApplcationCard />
		</DashBoardTemplate>
	);
}

export default MessChangeApplication;
