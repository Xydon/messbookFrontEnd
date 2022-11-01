import React from "react";
import AssetStore from "../assets/AssetStore";
import { FeedbackProp } from "../props";

function ConstructStarList(count: number) {
	var lst = [];

	for (let i = 0; i < count; ++i) {
		lst.push(i);
	}

	return lst;
}

function FeedbackCard(props : FeedbackProp) {

	return (
		<div className="FeedbackCard p-4 flex dir-col m-2">
			<p className="cc_22 mb-3 medium">{props.month}</p>
			<div className="FeedbackCardTextBod grow-1">
				<p className="cc_16">
					{props.text}
				</p>
			</div>
			<div className="row" style={{ justifyContent: "flex-end" }}>
				<div className="FeedbackCardStarsBox flex ">
					{ConstructStarList(props.rating).map((val) => (
						<div key={val} style={{ marginLeft: 4, marginRight: 4 }}>
							{<AssetStore.Star className="star" />}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default FeedbackCard;
