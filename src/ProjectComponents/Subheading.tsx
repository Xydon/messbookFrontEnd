import React from "react";

function CC27(props: { text: string }) {
	return (
		<div className="row mb-5">
			<div className="box">
				<p className="cc_27 semi_bold">{props.text}</p>
			</div>
		</div>
	);
}

function CC22(props: { text: string }) {
	return (
		<div className="row mb-3">
			<div className="box">
				<p className="cc_22 medium">{props.text}</p>
			</div>
		</div>
	);
}

function Subheading(props: { text: string; type?: "small" | "big" }) {
	let type = props.type === undefined ? "big" : "small";
	return (
		<>
			{type == "big" ? <CC27 text={props.text} /> : <CC22 text={props.text} />}
		</>
	);
}

export default Subheading;
