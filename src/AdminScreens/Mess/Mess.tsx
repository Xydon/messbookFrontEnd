import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MessEntity from "../../Entities/Mess";
import StateSetter from "../../Solutions/StateSetter";
import ExtendibleDashboardTempalte from "../../Templates/ExtendibleDashboardTemplate";
import AdminRouterConfig from "../routerConfig";

import "./Mess.css";

type FilterConfig = {
	id?: string;
	name?: string;
	hostel?: string;
};

const check = (a: string | undefined, b: string) => {
	return a && !b.toLowerCase().includes(a.toLowerCase());
};

function filterMessList(messList: Array<MessEntity>, config: FilterConfig) {
	return messList.filter((mess) => {
		if (check(config.id, mess.id)) {
			return false;
		}
		if (check(config.hostel, mess.hostel_name)) {
			return false;
		}
		if (check(config.name, mess.name)) return false;
		return true;
	});
}

function MessView() {
	const [data, setData] = useState<Array<MessEntity>>([]);
	const [filterConfig, setFilterConfig] = useState<FilterConfig>({});

	console.log(filterConfig);

	const setter = new StateSetter<FilterConfig>(setFilterConfig);

	useEffect(() => {
		axios.get("http://localhost:8080/api/mess/all").then((rawData) => {
			let { data } = rawData;
			if (data.error.errorCode == "FAILED") return;
			setData(data.response);
		});
	}, []);
	return (
		<ExtendibleDashboardTempalte navList={AdminRouterConfig}>
			<div className=" Student Student__content">
				<div className="content__heading__row row">
					<div className="heading__headingText__box">
						<p className="cc_37 bold ScreenHeading">Students</p>
					</div>

					<Link to={""}>
						<div className="heading__button__box">
							<div className="heading__AddStudentButton button_size_m round-16 label_white">
								<p className="cc_16">create new</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="Student__Subheading mb-2">
					<p className="cc_32 medium">Filter</p>
				</div>

				<div className="Student__filterControl__row row mb-6">
					<input
						type="text"
						className="input_size_m round-8 mb-2 mr-1 form__input filterControl__rollNumber"
						placeholder="id"
						onInput={setter.setLabel("id")}
					/>
					<input
						type="text"
						className="input_size_m round-8 mb-2 mr-1 form__input filterControl__name"
						placeholder="name"
						onInput={setter.setLabel("name")}
					/>
					<input
						type="text"
						className="input_size_m round-8 mb-2 mr-2 form__input filterControl__semester"
						placeholder="hostel"
						onInput={setter.setLabel("hostel")}
					/>
					<div className="button_size_m round-16 label_white filterControlApplyButton">
						<p className="cc_16">apply</p>
					</div>
				</div>

				<div className="Student__Subheading mb-2">
					<p className="cc_22 medium">Mess List</p>
				</div>

				<div className="Student__studentList__box row g-2">
					{filterMessList(data, filterConfig).map((student, index) => (
						<Link to={`/mess/${student.id}`}>
							<div className="col-3 vc cp" key={index}>
								<div className="vc flex">
									<div
										style={{
											width: 86,
											height: 86,
											borderRadius: 56,
											border: "1px solid lightgray",
											marginRight: 16,
										}}
									></div>
									<div>
										<p className="cc_16 semi_bold">{student.name}</p>
										<div className="flex sb">
											<p className="cc_14 mr-1">{student.hostel_name}</p>
											<p className="cc_14">{student.id}</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</ExtendibleDashboardTempalte>
	);
}

export default MessView;
