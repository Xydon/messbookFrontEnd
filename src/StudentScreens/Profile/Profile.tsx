import React from "react";

import "./Profile.css";

import { ReactComponent as Exclamation } from "../../assets/exclamation.svg";
import { ReactComponent as CircleTick } from "../../assets/circleTick.svg";

function Profile() {
	return (
		<div className="Dashboard Profile">
			<div className="Dashboard__sideBoard"></div>
			<div className="Dashboard__content">
				<div className="Dashboard__heading__row mb-4">
					<div className="Dashboard__heading__box">
						<p className="cc_37 bold">Profile</p>
					</div>
				</div>

				<div className="Profile__infoTag__row row mb-10 ">
					<div className="Profile__infoTag__box">
						<div className="infoTag infoTag__warning pl-4 pr-4 pb-3 pt-3 mr-8 round-16 ">
							<div className="infoTag__content__row row vc">
								<div className="content__icon__box mr-3">
									<Exclamation className="content__icon" />
								</div>
								<div className="content__text__box">
									<p className="cc_16">Pay the mess fee advance</p>
								</div>
							</div>
						</div>
					</div>
					<div className="Profile__infoTag__box">
						<div className="infoTag infoTag__paid pl-4 pr-4 pb-3 pt-3 mr-8 round-16">
							<div className="infoTag__content__row row vc">
								<div className="content__icon__box mr-3">
									<CircleTick className="content__icon" />
								</div>
								<div className="content__text__box">
									<p className="cc_16">Pay the mess fee advance</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<p className="cc_27 medium Profile__subheading mb-5">Semester - 4</p>
				<div className="Profile__Details">
					<p className="cc_27 medium Profile__subheading mb-4">Details</p>
					<div className="Profile__image mb-2"></div>
          <p className="cc_18 Profile_subheading mb-5"> Name - Lauda Singh</p>
				</div>
			</div>
		</div>
	);
}

export default Profile;
