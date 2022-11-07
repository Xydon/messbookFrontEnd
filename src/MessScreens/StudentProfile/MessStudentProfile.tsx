import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Student from "../../Entities/Student";
import AbsentCalculator from "../../ProjectComponents/AbsentCalculator";
import ConfigDetailsGroup from "../../ProjectComponents/AdminDetailsGroup";
import Card from "../../ProjectComponents/Card";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";
import { getProfileDetails } from "./fetch";

import "./MessStudentProfile.css";

function StudentProfile() {
	// data
	const [student, setStudent] = useState<Student>();

	const { rollNumber } = useParams();

	useEffect(() => {
		if (rollNumber) {
			getProfileDetails(rollNumber).then(
				(data) => data !== null && setStudent(data)
			);
		}
	}, []);

	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "phone number", text: student?.phone_number },
			{ label: "department", text: student?.department },
			{ label: "cmail id", text: "snehal@cmail.com" },
		],
	};

	return (
		<DashBoardTemplate heading="Student Profile" navList={MessRouterConfig}>
			<div className="row mb-9">
				<div className="box mr-3">
					<div
						style={{
							width: 100,
							height: 100,
							borderRadius: 50,
							backgroundColor: "#e7e7e7",
						}}
					></div>
				</div>
				<div className="box vc">
					<div>
						<p className="cc_22 medium">{student?.name}</p>
						<p className="cc_16 medium" style={{ marginTop: -3 }}>
							{student?.roll_number}
						</p>
					</div>
				</div>
			</div>
			<div className="row mb-5">
				<div className="col pt-9">{ConfigDetailsGroup(PersonalDetails)}</div>
				<div className="col hc">
					<AbsentCalculator />
				</div>
			</div>

			<div className="row">
				<div className="box">
					<Subheading text="Feedbacks" />
				</div>
			</div>
			<div className="row mb-3 g-1">
				<div className="box">
					<Card width={350}>
						<p className="cc_14">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
							voluptatem ratione blanditiis quae, obcaecati provident, earum sed
							numquam ipsum nulla, incidunt quo sapiente alias debitis
							dignissimos. Temporibus consequuntur repellat harum doloribus
							ullam qui labore libero, vitae totam nihil est nemo eum, modi ut,
							at similique dolore veritatis saepe? Veniam, maiores.
						</p>
					</Card>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default StudentProfile;
