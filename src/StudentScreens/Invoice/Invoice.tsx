import React from "react";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./Invoice.css";

function InvoiceCard() {
	return (
		<div className="invoiceCardContainer mb-2">
			<p className="cc_22 semi_bold mb-3">October</p>
      <p className="cc_18">mess charges - 2500</p>
      <p className="cc_18 mb-5">extra charges - 2500</p>
      <p className="cc_18 medium">total - 5000</p>
		</div>
	);
}

function Invoice() {
	return (
		<DashBoardTemplate heading="Invoice" navList={[]}>
			<div className="row mb-5">
				<div className="box">
					<p className="cc_27 semi_bold">Semester - 4th</p>
				</div>
			</div>

			<div className="invoicesContainer">
        <InvoiceCard/>
        <InvoiceCard/>
        <InvoiceCard/>
        <InvoiceCard/>
        <InvoiceCard/>
        <InvoiceCard/>
      </div>

		</DashBoardTemplate>
	);
}

export default Invoice;
