import { motion, useSpring } from "framer-motion";
import React, { useRef } from "react";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./AdminMessProfile.css";

function StudentProfileList() {
	return (
		<div className="studentProfileListContainer row vc">
			<div className="profileImageBox mr-2"></div>
			<div className="profileTextBox">
				<p className="cc_18">Snehal Kumar Singh</p>
				<p className="cc_14">Hostel Name</p>
			</div>
		</div>
	);
}
function FeedbackCard() {
	return (
		<div className="FeedbackCardContainer round-8 p-2 mr-2">
			<p className="cc_14 mb-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
				alias molestias rem obcaecati quo cumque explicabo consequatur repellat
				deleniti!
			</p>
			<div className="row"></div>
		</div>
	);
}

function AdminMessProfile() {
	let xRef = useRef<number>(0);
	let x = useSpring(xRef.current);

	const scrollCollectionLeft = () => {
		if (xRef.current >= 0) return;
		xRef.current += 200;
		x.set(xRef.current);
	};

	const scrollCollectionRight = () => {
		xRef.current -= 200;
		x.set(xRef.current);
	};

	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "id", text: "aslas920" },
			{ label: "phone number", text: "933651651" },
			{ label: "cmail", text: "mess@cmail.com" },
		],
	};

	return (
		<DashBoardTemplate navList={AdminRouterConfig} heading="Mess Profile">
			<div className="row vc mb-10">
				<div
					className="box mr-4"
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						backgroundColor: "#e7e7e7",
					}}
				></div>

				<div className="box">
					<p className="cc_24 medium" style={{ marginBottom: -4 }}>
						Name
					</p>
					<p className="cc_16">hostel</p>
				</div>
			</div>

			<div className="row mb-10">
				<div className="col-4">{ConfigDetailsGroup(PersonalDetails)}</div>
			</div>

			<p className="cc_24 medium mb-3">Number of Students Enrolled - </p>
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

			<div className="row studentListRow mt-5 mb-8">
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
				<StudentProfileList />
			</div>

			<div className="feedbackSection mb-10">
				<Subheading text="October" />
				<Subheading text="Feedbacks" type="small" />
				<div className="feedbackCollectionRow mb-1">
					<motion.div className="feedbackCollectionBox flex " style={{ x }}>
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
					</motion.div>
				</div>
				<div className="row mb-8">
					<div
						className="button_size_s bg_black pl-3 pr-3 label_white mr-2 round-32"
						onClick={scrollCollectionLeft}
					>
						<p className="cc_16">{"<"}</p>
					</div>
					<div
						className="button_size_s bg_black pl-3 pr-3 label_white round-32"
						onClick={scrollCollectionRight}
					>
						<p className="cc_16">{">"}</p>
					</div>
				</div>

				<div className="row">
					<div className="box">
						<p className="cc_22">Average Rating - 4.5</p>
					</div>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default AdminMessProfile;
