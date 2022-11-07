import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DetailsGroup from "../ProjectComponents/DetailsGroup";
import { SidebarNavType } from "../props";

import "./DashBoardTemplate.css";



function Sidebar(props: { navList: Array<SidebarNavType> }) {
	const location = useLocation();
	const isLinkActive = (link: string) => location.pathname === link;

	const SidebarNavLink = (props: SidebarNavType) => {
		const navigate = useNavigate();

		return (
			<div
				className="SideboardNavLink flex vc m-2"
				onClick={() => navigate(props.link)}
			>
				<div className="SidebarNavLink__icon__box mr-2"><props.icon/></div>
				<div className="SidebarNavLink__label__box">
					<p className="cc_16" style={props.isActive ? {} : { color: "gray" }}>
						{props.label}
					</p>
				</div>
			</div>
		);
	};

	return (
		<div className="Dashboard__sideBoard">
			<div className="LogoRow">
				<div className="LogoBox">
					<p className="cc_22 semi_bold LogoText">Mess Book</p>
				</div>
			</div>

			<div className="ProfileRow pr-2 mt-3">
				<div className="ProfileBox p-2">
					<div className="ProfileImageRow row hc">
						<div className="ProfileImageBox"></div>
					</div>

					<div className="ProfileNameRow hc mt-2">
						<div className="ProfileNameBox">
							<p className="cc_18 medium">Profile Name</p>
						</div>
					</div>

					<div className="LogoutButtonRow hc mt-2">
						<div className="LogoutButtonBox">
							<div className="button_size_s LogoutButton round-8 ph-2">
								<p className="cc_16">logout</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="LinkRow mt-4 flex hc pr-2">
				<div className="LinkBox">
					{props.navList.map((linkInfo, index) => (
						<SidebarNavLink
							icon={linkInfo.icon}
							link={linkInfo.link}
							label={linkInfo.label}
							isActive={isLinkActive(linkInfo.link)}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function DashBoardTemplate(
	props: {
		navList: Array<SidebarNavType>;
		heading: string;
		children: React.ReactNode;
	} = {
		navList: [],
		heading: "heading",
		children: <></>,
	}
) {
	return (
		<div className="Dashboard">
			<Sidebar navList={props.navList} />

			<div className="Dashboard__content">
				<div className="Dashboard__heading__row">
					<div className="Dashboard__heading__box">
						<p className="cc_37 bold">{props.heading}</p>
					</div>
				</div>
				{props.children}
			</div>
		</div>
	);
}

export default DashBoardTemplate;
