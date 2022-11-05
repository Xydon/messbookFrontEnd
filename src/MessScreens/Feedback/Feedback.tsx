import React, { useEffect, useRef } from "react";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";

import "./Feedback.css";

import { motion, useSpring } from "framer-motion";
import MessRouterConfig from "../routerConfig";

function FeedbackCard() {
	return (
		<div className="FeedbackCardContainer round-8 p-2 mr-2">
			<p className="cc_14 mb-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
				alias molestias rem obcaecati quo cumque explicabo consequatur repellat
				deleniti!
			</p>
			<div className="row"></div>
		</div>
	);
}

function Feedback() {
	let xRef = useRef<number>(0);
	let x = useSpring(xRef.current);

	const scrollCollectionLeft = () => {
		if (xRef.current >= 0) return;
		xRef.current += 200;
		x.set(xRef.current);
	};

	const scrollCollectionRight = () => {
		xRef.current -= 200;
		x.set(xRef.current);
	};

	return (
		<DashBoardTemplate navList={MessRouterConfig} heading="Feedbacks">
			<div className="monthFeedbackContainer">
				<Subheading text="October" />
				<Subheading text="Feedbacks" type="small" />
				<div className="feedbackCollectionRow mb-1">
					<motion.div
						className="feedbackCollectionBox flex "
						style={{
							x,
						}}
					>
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
						<FeedbackCard />
					</motion.div>
				</div>

				<div className="row mb-8">
					<div
						className="button_size_s bg_black pl-3 pr-3 label_white mr-2 round-32"
						onClick={scrollCollectionLeft}
					>
						<p className="cc_16">{"<"}</p>
					</div>
					<div
						className="button_size_s bg_black pl-3 pr-3 label_white round-32"
						onClick={scrollCollectionRight}
					>
						<p className="cc_16">{">"}</p>
					</div>
				</div>

        <div className="row">
          <div className="box">
            <p className="cc_22">
              Average Rating - 4.5
            </p>
          </div>
        </div>
			</div>
		</DashBoardTemplate>
	);
}

export default Feedback;
