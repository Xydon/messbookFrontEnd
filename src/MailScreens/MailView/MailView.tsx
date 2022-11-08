import React, { useState } from "react";
import AssetStore from "../../assets/AssetStore";
import ListItem from "../../ProjectComponents/ListItem";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./MailView.css";

function MailEntry(props: {
	closeFunction: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<div className="MailEntryContainer">
			<div className="senderInputRow row pl-5 pr-5 mb-2 sb vc">
				<div className="box vc">
					<div className="sendChip vc pl-3 pr-3 label_white mr-5">
						<p className="cc_16 semi_bold">sender</p>
					</div>
					<input
						className="cc_18 semi_bold senderInput"
						placeholder="enter sender cmail id"
					></input>
				</div>

				<div className="p-2 cp" onClick={() => props.closeFunction(false)}>
					<AssetStore.Close />
				</div>
			</div>

			<div className="row mt-3 vc pr-6">
				<div className="SubjectTag vc pr-2 mr-4">
					<p className="cc_16 bold">subject</p>
				</div>
				<input className="senderInput cc_18" placeholder="enter subject" />
				<div className="button_size_m round-16 bg_black label_white pl-3 pr-3">
					<p className="cc_16">submit</p>
				</div>
			</div>

			<div className="mailContent mt-3 p-6 cc_18">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quos
				sunt voluptatem voluptates voluptatibus esse, praesentium, aperiam
				excepturi facilis quisquam asperiores animi placeat odio ab eum itaque
				nisi commodi? Aut tenetur nostrum nulla repellendus nisi, laudantium
				aspernatur fuga!
			</div>
		</div>
	);
}

function MailView() {
	let arr = [];
	for (let i = 0; i < 20; ++i) arr.push(i);
	const [showOverlay, setShowOverlay] = useState(false);

	const activeButtonStyle = {
		boxShadow: "var(--shadow-12)",
	};

	const [selectedButton, setSelectedButton] = useState<"sent" | "received">(
		"received"
	);

	return (
		<DashBoardTemplate heading="Mail" navList={[]}>
			<div className="mb-7">
				<div className="row sb pr-5">
					<div className="flex">
						<div
							className="button_size_m round-8 mr-2 mailContextButton hc"
							style={selectedButton === "received" ? activeButtonStyle : {}}
							onClick={() => setSelectedButton("received")}
						>
							received
						</div>
						<div
							className="button_size_m round-8 mr-2 mailContextButton hc"
							onClick={() => setSelectedButton("sent")}
							style={selectedButton === "sent" ? activeButtonStyle : {}}
						>
							sent
						</div>
					</div>

					<div className="button_size_m label_white pl-6 pr-6 bg_black round-8 mailCreateButton">
						<p className="cc_16">create</p>
					</div>
				</div>
			</div>

			<div className="mailContainerRow row">
				<div className="mailContainerBox col-9">
					{arr.map((val) => (
						<div
							className="row vc"
							key={val}
							onClick={() => setShowOverlay((prev) => !prev)}
						>
							<AssetStore.Done className="mr-3" />
							<div className="mailEntry mb-1 vc pl-4 pr-4 sb">
								<p className="medium cc_16">vikramvidhan@cmail.com</p>
								<p className="cc_16">12/08/2022</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{showOverlay && (
				<div className="overlay hc vc">
					<MailEntry closeFunction={setShowOverlay} />
				</div>
			)}
		</DashBoardTemplate>
	);
}

export default MailView;
