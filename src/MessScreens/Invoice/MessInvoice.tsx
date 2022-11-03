import React from "react";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./MessInvoice.css";

function NumberDisplay() {
	return (
		<div className="box">
			<p className="cc_14">Made Rs</p>
			<p className="cc_32 bold">2000</p>
		</div>
	);
}

function MessInvoiceCard() {
	return (
		<>
			<p className="cc_18 mb-1">October</p>
			<div className="messInvoiceCard p-4">

				<div className="row mb-3">
					<div className="box mr-10">
						<NumberDisplay />
					</div>
					<div className="box">
						<NumberDisplay />
					</div>
				</div>
				<div className="row mb-3">
					<div className="box mr-10">
						<NumberDisplay />
					</div>
					<div className="box">
						<NumberDisplay />
					</div>
				</div>

			</div>
		</>
	);
}

function MessInvoice() {
	return (
		<DashBoardTemplate heading="Invoice" navList={[]}>
			<Subheading text="Total Revenues" />
			<MessInvoiceCard />
		</DashBoardTemplate>
	);
}

export default MessInvoice;
