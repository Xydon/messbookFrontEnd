import React from "react";

type Detail = { label: string; text: string };

function DetailsList(props: Detail) {
	return (
		<div className="flex">
			<p className="cc_18 DetailLabel">{props.label}</p>
			<p className="cc_18 DetailsListSeparator mr-1 ml-1">-</p>
			<p className="cc_18 DetailText">{props.text}</p>
		</div>
	);
}

export default function DetailsGroup(props: {
	data: Array<Detail>;
	heading: string;
}) {
	return (
		<div className="DetailsContainer">
			<div className="DetailsHeadingBox">
				<p className="cc_27">{props.heading}</p>
			</div>
			<div className="DetailsMapBox mt-3">
				{props.data.map((val) => {
					return <DetailsList {...val} />;
				})}
			</div>
		</div>
	);
}
