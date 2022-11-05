import React from "react";

import { useParams } from "react-router-dom";
import {ButtonMedium} from "../../ProjectComponents/Button";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./StudentProfile.css";

function DetailsContainer({
	heading,
	children,
}: {
	heading: string;
	children: React.ReactNode;
}) {
	return (
		<div className="MessAdminDetailsContainer">
			<p className="cc_24 mb-3 medium">{heading}</p>
			{children}
		</div>
	);
}

function DetailsGroupList({ label, text }: { label: string; text: string }) {
	return (
		<div className="row" style={{ width: 400 }}>
			<div className="col">
				<p className="cc_18 medium mr-3">{label}</p>
			</div>
			<div className="col-6">
				<p className="cc_16">{text}</p>
			</div>
		</div>
	);
}

function ConfigDetailsGroup(config: {
	heading: string;
	rows: Array<{ label: string; text: string }>;
}) {
	return (
		<DetailsContainer heading={config.heading}>
			{config.rows.map((val, index) => (
				<DetailsGroupList key={index} {...val} />
			))}
		</DetailsContainer>
	);
}

function MessTransactionCard() {
	return (
		<div className="TransactionCardContainer round-16 p-3 vc">
			<div className="box sb" style={{ width: "100%" }}>
				<p className="cc_27 bold">2000</p>
				<div className="box">
					<p className="cc_14">paid</p>
					<p className="cc_16">12/12/2022</p>
				</div>
			</div>
		</div>
	);
}

function StudentTransactionCard() {
	return (
		<div className="StudentTransactionCard round-16 p-3">
			<div className="box" style={{ width: "100%" }}>
				<div className="box">
					<p className="cc_18 medium">Mess Advance</p>
				</div>
				<div className="flex" style={{ justifyContent: "flex-end" }}>
					<p className="cc_32 mb-1 bold">20000</p>
				</div>
				<div>
					<p className="cc_18 medium">PAID</p>
				</div>
			</div>
		</div>
	);
}

function StudentProfile() {
	const { studentRollNumber } = useParams();

	const PersonalDetails = {
		heading: "Personal Details",
		rows: [
			{ label: "phone number", text: "9369074016" },
			{ label: "department", text: "cse" },
			{ label: "cmail id", text: "snehal@cmail.com" },
		],
	};

	const SemesterDetails = {
		heading: "Semester Details",
		rows: [
			{ label: "semester number", text: "1" },
			{ label: "mess name", text: "rajkumar yadav" },
			{ label: "hostel allocated", text: "Sn Bose" },
		],
	};

	return (
		<DashBoardTemplate heading="Student Profile" navList={[]}>
			<div className="AdminStudentProfile">
				<div className="row mb-9">
					<div className="box mr-3">
						<div className="StudentProfileImage"></div>
					</div>
					<div className="box vc">
						<div>
							<p className="cc_22 medium">Snehal Kumar Singh</p>
							<p className="cc_16 medium" style={{ marginTop: -3 }}>
								20075087
							</p>
						</div>
					</div>
				</div>

				<div className="row mb-10">
					<div className="col-6">{ConfigDetailsGroup(PersonalDetails)}</div>
					<div className="col-6">{ConfigDetailsGroup(SemesterDetails)}</div>
				</div>

				<div className="form mb-10">
					<div className="row mb-4">
						<div className="box">
							<p className="cc_24 medium">Notify Student</p>
						</div>
					</div>
					<div className="row mb-1">
						<div className="col-3">
							<input type="text" className="form__input height-44 round-8" />
						</div>
					</div>

					<div className="row mb-1">
						<div className="col-6">
							<textarea className="form__input height-44 round-8" />
						</div>
					</div>

					<div className="row">
						<div className="box">
							<ButtonMedium label="submit" />
						</div>
					</div>
				</div>

				<div className="AdminStudentTransactions mb-10">
					<div className="row">
						<div className="box">
							<p className="cc_24 medium mb-3">Transactions</p>
							<StudentTransactionCard />
						</div>
					</div>
				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default StudentProfile;
