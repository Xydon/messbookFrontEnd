import React from "react";
import { ButtonLarge, ButtonMedium } from "../../ProjectComponents/Button";
import ExtendibleDashboardTempalte from "../../Templates/ExtendibleDashboardTemplate";

import "./AdminMessView.css";

function MessProfileList() {

	return (
		<div
			className="row vc mr-6 mb-2 cp"
		>
			<div className="profileImageBox mr-2"></div>
			<div className="profileTextBox">
				<p className="cc_18">Mess name</p>
				<div className="row" style={{ marginTop: -3 }}>
					<p className="cc_14 mr-2">id</p>
					<p className="cc_14">hostel name</p>
				</div>
			</div>
		</div>
	);
}

function AdminMessView() {
	return (
		<ExtendibleDashboardTempalte navList={[]}>
			<div className="AdminMessView Dashboard__content">
				<div className="row Dashboard__heading__row sb">
          <p className="cc_37 semi_bold">Mess</p>
          <ButtonLarge label="create new"/>
        </div>

        <div className="row">
          <div className="box">
            <p className="cc_27 medium mb-3">Filter</p>
          </div>
        </div>

        <div className="row mb-10">
          <div className="col-2 mr-1">
            <input type="text" className="form__input height-44 round-8" placeholder="id" />
          </div>
          <div className="col-4 mr-1">
            <input type="text" className="form__input height-44 round-8" placeholder="name" />
          </div>
          <div className="col-2 mr-3">
            <input type="text" className="height-44 form__input round-8" placeholder="hostel"/>
          </div>
          <div className="col">
            <ButtonMedium label="apply"/>
          </div>
        </div>

        <div className="row mb-4">
          <div className="box">
            <p className="cc_24 medium">Mess List</p>
          </div>
        </div>

        <div className="MessProfileListRow row">
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
          <MessProfileList/>
        </div>

			</div>
		</ExtendibleDashboardTempalte>
	);
}

export default AdminMessView;
