import React from "react";
import AbsentCalculator from "../../ProjectComponents/AbsentCalculator";
import DetailsGroup from "../../ProjectComponents/DetailsGroup";
import FeedbackCard from "../../ProjectComponents/FeedbackCard";
import ListItem from "../../ProjectComponents/ListItem";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./Mess.css";

function Mess() {
	return (
		<DashBoardTemplate heading="Mess" navList={[]}>
			<p className="cc_27 mb-8 semi_bold">Semester - 4th</p>

			<div className="row">
				<div className="col-5">
					<DetailsGroup
						heading="Details"
						data={[{ label: "Hostel", text: "Sn Bose" }]}
					/>
				</div>
				<div className="col">
					<DetailsGroup
						heading="Mess Operator"
						data={[
							{ label: "Name", text: "Shyam Sundar Chaudhary" },
							{ label: "phone-number", text: "9369074016" },
						]}
					/>
				</div>
			</div>

			<div className="row mt-5 mb-4">
				<p className="cc_27 medium">Feedbacks</p>
			</div>

			<div className="row mb-10 FeedbackCardContainer">
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
				<FeedbackCard month={"October"} text={"good food"} rating={3} />
			</div>

			<div className="row mt-5 mb-4">
				<div className="box">
					<p className="cc_27 medium">Extra Items Menu</p>
				</div>
			</div>

			<div className="row mb-10">
				<div className="ExtraItemBox col-7 mb-1">
					<ListItem size="s">
						<p className="cc_16 medium">Paneer Rice</p>
						<p className="cc_16">20</p>
					</ListItem>
					<ListItem size="s">
						<p className="cc_16 medium">Paneer Rice</p>
						<p className="cc_16">20</p>
					</ListItem>
					<ListItem size="s">
						<p className="cc_16 medium">Paneer Rice</p>
						<p className="cc_16">20</p>
					</ListItem>
					<ListItem size="s">
						<p className="cc_16 medium">Paneer Rice</p>
						<p className="cc_16">20</p>
					</ListItem>
				</div>
			</div>

			<div className="row mt-5 mb-4">
				<div className="box">
					<p className="cc_27 medium">Absent Calendar</p>
				</div>
			</div>

			<div className="row mb-10">
				<AbsentCalculator />
			</div>

			<div className="row mb-6">
				<div className="box">
					<p className="cc_27 medium">Mark Absent</p>
				</div>
			</div>

			<div className="row vc mb-4">
				<div className="startInputBox mr-2">
					<input
						className="form__input startInput messAbsentInput vc"
						type="date"
					/>
				</div>
				<div className="separatorBox">
					<p className="cc_22 bold">-</p>
				</div>
				<div className="endInputBox ml-2">
					<input type="date" className="form__input messAbsentInput endInput" />
				</div>
			</div>

			<div className="row mb-10">
				<div className="box">
					<div className="button_size_m round-16 label_white bg_black ph-3">
						<p className="cc_16">submit</p>
					</div>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default Mess;
