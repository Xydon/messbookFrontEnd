import React from "react";
import { DetailsConfig } from "../props";
import ConfigDetailsGroup from "./AdminDetailsGroup";

function DetailsShadowCard({ details }: { details: DetailsConfig }) {
	return (
		<div className="shadow-12 round-16 p-5">{ConfigDetailsGroup(details)}</div>
	);
}

export default DetailsShadowCard;
