import React from "react";
import { DetailsConfig } from "../props";
import ConfigDetailsGroup from "./AdminDetailsGroup";

function DetailsShadowCard({ details }: { details: DetailsConfig }) {
	return (
		<div className="shadow-12 round-32 p-6">{ConfigDetailsGroup(details)}</div>
	);
}

export default DetailsShadowCard;
