import React from "react";

function ScreenHeading({
	text,
	children,
}: {
	text: string;
	children: React.ReactNode;
}) {
	return (
		<div className="row sb Dashboard__heading__row">
			<div className="box">
				<p className="cc_37 semi_bold">{text}</p>
			</div>
			<div className="box">{children}</div>
		</div>
	);
}

export default ScreenHeading;
