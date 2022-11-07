import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ResponseWithError } from "../Entities/ResponseWithError";
import DateUtils from "../Solutions/DateUtils";
import { Fetch } from "../Solutions/FetchUtils";

import "./AbsentCalculator.css";
import ListItem from "./ListItem";

//* fetching function
async function fetchDateList() {
	const api = `http://localhost:8080/api/mess/service/presenceList?student_roll_number=20075087&mess_id=XKLSEJF&month=2022-11-01`;
	const res = axios.get(api, {
		params: {
			student_roll_number: "20075087",
			mess_id: "XKLSEJF",
		},
	});
	return (await res).data.response;
}

async function fetchMonthList() {
	const api = "";
}

class AbsentFetch extends Fetch {
	async fetchDateList(firstDateOfMonth: Date) {
		const dateString = DateUtils.jsonDateFormat(firstDateOfMonth);
		const api = this.getApi(
			`api/mess/service/presenceList?student_roll_number=20075087&mess_id=XKLSEJF&month=${dateString}`
		);
		const res = axios.get(api, {
			params: {
				student_roll_number: "20075087",
				mess_id: "XKLSEJF",
			},
		});

		return (await res).data.response;
	}

	async fetchMonthList(): Promise<Array<Date>> {
		const api = this.getApi("api/semester/monthList");
		const res = await axios.get<ResponseWithError<Array<Date>>>(api);
		const rawDateList = res.data.response;
		const dateList = rawDateList.map((val) => new Date(val));
		return dateList;
	}
}

// todo -- CHANGE THE LIST ITEM
function DateList(props: {
	firstDateOfMonth: Date;
	date: number;
	hasAte: boolean;
}) {
	return (
		<div className="DateListRow row sb cp">
			<div
				className="dateNumberBox hc vc mr-2 flex"
				style={props.hasAte ? {} : { backgroundColor: "lightseagreen" }}
			>
				<p className="cc_16" style={{ userSelect: "none" }}>
					{props.date}
				</p>
			</div>
			<div className="col">
				<div className="box round-8 dbg absentCalculator__list"></div>
			</div>
		</div>
	);
}

function AbsentCalculator() {
	const fetcher = new AbsentFetch();

	const [presentList, setPresentList] = useState<Array<{ hasAte: boolean }>>(
		[]
	);

	const [semesterMonthDateList, setSemesterMonthDateList] =
		useState<Array<Date>>();

	const [monthName, setMonthName] = useState<string>("");

	useEffect(() => {
		fetcher.fetchMonthList().then((data) =>
			setSemesterMonthDateList((prev) => {
				setMonthName(DateUtils.monthMapper(data[data.length - 1].getMonth()));
				fetcher
					.fetchDateList(data[data.length - 1])
					.then((presentData) => setPresentList(presentData));
				return data;
			})
		);
	}, []);

	return (
		<div className="AbsentCalculator round-32 p-6 dir-col flex">
			<div className="row mb-3">
				<div className="col-7">
					<p className="cc_22 semi_bold mb-1" style={{lineHeight : 1}}>Mess Entry</p>
					<p className="cc_16 medium">{monthName}</p>
				</div>
				<div className="col-5">
					<select
						onChange={(e) => {
							e.preventDefault();
							setMonthName(e.target.value); 
							if (semesterMonthDateList) {
								let index = DateUtils.mapMultiMonthFromMonthDate(
									semesterMonthDateList
								).indexOf(e.target.value);
								fetcher
									.fetchDateList(semesterMonthDateList[index])
									.then((data) => setPresentList(data));
							}
						}}
					>
						{semesterMonthDateList &&
							DateUtils.mapMultiMonthFromMonthDate(semesterMonthDateList)
								.reverse()
								.map((month, index) => <option key={index}>{month}</option>)}
					</select>
				</div>
			</div>


			<div className="dateContainer">
				{presentList.map((presentInfo, index) => (
					<DateList
						date={index + 1}
						hasAte={presentInfo.hasAte}
						firstDateOfMonth={
							new Date(new Date().getFullYear(), new Date().getMonth(), 1)
						}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}

export default AbsentCalculator;
