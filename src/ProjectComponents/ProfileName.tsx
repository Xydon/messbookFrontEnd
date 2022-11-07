import React from "react";

function ProfileName({ name = "", subInfo = "", subInfoCom = <></> }) {
	return (
		<div className="row">
			<div className="box mr-3">
				<div
					style={{
						width: 100,
						height: 100,
						borderRadius: 60,
						border: "1px solid grey",
					}}
				></div>
			</div>
			<div className="box vc">
				<div>
					<p className="cc_22 medium">{name}</p>
					<p className="cc_16 medium" style={{ marginTop: -3 }}>
						{subInfo}
						{subInfoCom}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileName;
