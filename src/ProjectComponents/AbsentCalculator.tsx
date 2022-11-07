import axios from "axios";
import React, { useEffect, useState } from "react";

import "./AbsentCalculator.css";
import ListItem from "./ListItem";

//* fetching function
async function fetchDateList() {
	const date = new Date();
	const api = `http://localhost:8080/api/mess/service/presenceList?student_roll_number=20075087&mess_id=XKLSEJF&month=2022-11-01`;
	const res = axios.get(api, {
		params: {
			student_roll_number: "20075087",
			mess_id: "XKLSEJF",
		},
	});
	return (await res).data.response;
}

// todo -- CHANGE THE LIST ITEM
function DateList(props: { date: number; hasAte: boolean }) {
	return (
		<div className="DateListRow row sb">
			<div className="dateNumberBox hc vc mr-2 flex" style={props.hasAte ? {} : {backgroundColor : 'lightseagreen'}}>
				<p className="cc_16" style={{ userSelect: "none" }}>
					{props.date}
				</p>
			</div>
			<div className="col">
				<div className="box round-8 dbg-1">

				</div>
			</div>
		</div>
	);
}

function AbsentCalculator() {
	const [presentList, setPresentList] = useState<Array<{ hasAte: boolean }>>(
		[]
	);

	useEffect(() => {
		fetchDateList().then((data) => setPresentList(data));
	}, []);

	return (
		<div className="AbsentCalculator round-32 p-6 dir-col flex">
			<p className="cc_22 semi_bold">Mess Entry</p>
			<p className="cc_16 mb-2">October</p>

			<div className="dateContainer">
				{presentList.map((presentInfo, index) => (
					<DateList date={index + 1} hasAte={presentInfo.hasAte} />
				))}
			</div>
		</div>
	);
}

export default AbsentCalculator;
