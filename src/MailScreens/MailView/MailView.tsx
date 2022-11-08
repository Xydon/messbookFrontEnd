import React, { useEffect, useState } from "react";
import AssetStore from "../../assets/AssetStore";
import Mail from "../../Entities/Mail";
import ListItem from "../../ProjectComponents/ListItem";
import DateUtils from "../../Solutions/DateUtils";
import StateSetter from "../../Solutions/StateSetter";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import FetchUtils from "./fetch";

import "./MailView.css";

type MailDisplayContextType = "view" | "create" | "none";

const fetcher = new FetchUtils();

function MailEntry(props: {
	closeFunction: React.Dispatch<React.SetStateAction<MailDisplayContextType>>;
	mailSetter: React.Dispatch<React.SetStateAction<Mail[]>>;
}) {
	const [mail, setMail] = useState<Mail>(
		new Mail("", "abc@cmail.com", "", "", new Date(), false, false, "", "")
	);

	const setter = new StateSetter<Mail>(setMail);

	const submitMail = () => {
		if (mail.receiver_cmail === "") {
			alert("please enter the receiver cmail");
			return;
		}

		if (mail.subject === "") {
			alert("please enter the subject");
			return;
		}

		if (mail.text === "") {
			alert("body of mail cannot be empty");
			return;
		}

		const res = fetcher.postMail(mail);

		res.then((data) => {
			data &&
				props.mailSetter((prev) => {
					return [...prev, data];
				});
		});
	};


	return (
		<div className="MailEntryContainer flex">
			<div className="senderInputRow row pl-5 pr-5 mb-2 sb vc">
				<div className="box vc">
					<div className="sendChip vc pl-3 pr-3 label_white mr-5">
						<p className="cc_16 semi_bold">sender</p>
					</div>
					<input
						className="cc_18 semi_bold senderInput"
						placeholder="enter sender cmail id"
						onInput={setter.setLabel("receiver_cmail")}
					></input>
				</div>

				<div className="p-2 cp" onClick={() => props.closeFunction("none")}>
					<AssetStore.Close />
				</div>
			</div>

			<div className="row mt-3 vc pr-6">
				<div className="SubjectTag vc pr-2 mr-4">
					<p className="cc_16 bold">subject</p>
				</div>
				<input
					className="senderInput cc_18"
					placeholder="enter subject"
					onInput={setter.setLabel("subject")}
				/>
				<div
					className="button_size_m round-16 bg_black label_white pl-3 pr-3"
					onClick={() => submitMail()}
				>
					<p className="cc_16">submit</p>
				</div>
			</div>

			<div className="mailContent mt-3 mb-2 p-6 cc_18">
				<textarea
					className="mail__textArea"
					placeholder="start writing"
					onInput={setter.setLabel("text")}
				/>
			</div>
		</div>
	);
}

function MailDisplay(props: {
	closeFunction: React.Dispatch<React.SetStateAction<MailDisplayContextType>>;
	mail?: Mail;
}) {
	return (
		<div className="MailEntryContainer">
			<div className="senderInputRow row pl-5 pr-5 mb-2 sb vc">
				<div className="box vc">
					<div className="sendChip vc pl-3 pr-3 label_white mr-5">
						<p className="cc_16 semi_bold">sender</p>
					</div>
					<p className="cc_18 semi_bold">{props.mail?.sender_cmail}</p>
				</div>

				<div className="p-2 cp" onClick={() => props.closeFunction("none")}>
					<AssetStore.Close />
				</div>
			</div>

			<div className="row mt-3 vc pr-6">
				<div className="SubjectTag vc pr-2 mr-4">
					<p className="cc_16 bold">subject</p>
				</div>
				<div className="col">
					<p className="cc_18">{props.mail?.subject}</p>
				</div>
			</div>

			<div className="mailContent mt-3 p-6 cc_18">{props.mail?.text}</div>
		</div>
	);
}

function MailView() {
	const activeButtonStyle = {
		boxShadow: "var(--shadow-12)",
	};

	const [showOverlay, setShowOverlay] =
		useState<MailDisplayContextType>("none");
	const [selectedButton, setSelectedButton] = useState<"sent" | "received">(
		"received"
	);

	// data
	const [mails, setMails] = useState<Array<Mail>>([]);
	const [selectedMail, setSelectedMail] = useState<Mail>();

	// effects
	useEffect(() => {
		console.log(mails);
		fetcher
			.getMail(selectedButton, "abc@cmail.com")
			.then((data) => data && setMails(data));
	}, [selectedButton]);

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

					<div
						className="button_size_m label_white pl-6 pr-6 bg_black round-8 mailCreateButton"
						onClick={() => setShowOverlay("create")}
					>
						<p className="cc_16">create</p>
					</div>
				</div>
			</div>

			<div className="mailContainerRow row">
				<div className="mailContainerBox col-9">
					{mails.map((val, index) => (
						<div
							className="row vc"
							key={index}
							onClick={() => setShowOverlay("view")}
						>
							<AssetStore.Done className="mr-3" />
							<div
								className="mailEntry mb-1 vc pl-4 pr-4 sb"
								onClick={() => setSelectedMail(val)}
							>
								<p className="medium cc_16">{val.sender_cmail}</p>
								<p className="cc_16">
									{DateUtils.fetchDateValue(val.sending_date)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* {showOverlay ? (
				<div className="overlay hc vc">
					<MailDisplay closeFunction={setShowOverlay} mail={selectedMail} />
				</div>
			) : (
				<div className="overlay hc vc">
					<MailEntry closeFunction={setShowOverlay} />
				</div>
			)} */}
			{showOverlay !== "none" && (
				<div className="overlay hc vc">
					{showOverlay === "create" && (
						<MailEntry closeFunction={setShowOverlay} mailSetter={setMails} />
					)}
					{showOverlay === "view" && (
						<MailDisplay closeFunction={setShowOverlay} mail={selectedMail} />
					)}
				</div>
			)}
		</DashBoardTemplate>
	);
}

export default MailView;
