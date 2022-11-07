import React from 'react'

import "./InfoCard.css"; 

export default function InfoCard(props: { icon: React.ReactNode; text: string }) {
	return (
		<div className="infoCardContainer round-8 pl-3 pr-3 vc">
			{props.icon}
			<div className="iconBox mr-2" />
			<div className="messageTextBox">
				<p className="cc_18 medium">{props.text}</p>
			</div>
		</div>
	);
}
