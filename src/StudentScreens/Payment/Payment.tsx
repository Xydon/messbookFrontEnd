import React, { useState } from "react";

import "./Payment.css";

import { ReactComponent as Chevron } from "../../assets/chevron.svg";

import { motion } from "framer-motion";

function Payment() {
	const [isChevronActive, setIsChevronActive] = useState(false);

	return (
		<div className="Dashboard Payment">
			<div className="Dashboard__sideBoard"></div>
			<div className="Dashboard__content">
        
				<div className="Dashboard__heading__row mb-4 row">
					<div className="Dashboard__heading__box">
						<p className="cc_37 bold">Payments</p>
					</div>

					<div className="Payment__MakePaymentBtn__Box">
						<div className="Payment__MakePaymentBtn button_size_m label_white pl-3 pr-3 round-16">
							<p className="cc_16">Make Payment</p>
						</div>
					</div>
				</div>

				<p className="cc_27 medium mb-4">Semester - 4</p>

				<div className="Payment__card round-16 p-4 mb-2">
					<div className="Payment__card__row row vc">
						<div>
							<p className="cc_22 mb-1">Rs. 20000</p>
							<p className="cc_16">12/06/2022</p>
						</div>
						<motion.div
							className="Payment__card__chevron__box p-2"
							animate={isChevronActive ? { rotate: 180 } : {}}
							onClick={() => setIsChevronActive((prev) => !prev)}
						>
							<Chevron />
						</motion.div>
					</div>
          {isChevronActive && <div className="mb-2"/>}
					<motion.div
						animate={
							isChevronActive ? { height: "fit-content", display : 'block'} : { height: 0}
						}
						style={{ overflow: "hidden", display : 'none' }}
					>
						<div className="row sb vc">
              <p className="cc_16">paid to administration</p>
              <p className="cc_22 bold Payment__card__statusText--pending">PENDING</p>
            </div>
					</motion.div>
				</div>
				<div className="Payment__card round-16 p-4">
					<div className="Payment__card__row row vc">
						<div>
							<p className="cc_22 mb-1">Rs. 20000</p>
							<p className="cc_16">12/06/2022</p>
						</div>
						<motion.div
							className="Payment__card__chevron__box p-2"
							animate={isChevronActive ? { rotate: 180 } : {}}
							onClick={(): void => {
                return setIsChevronActive((prev) => !prev);
              }}
						>
							<Chevron />
						</motion.div>
					</div>
          {isChevronActive && <div className="mb-2"/>}
					<motion.div
            className="mt-2"
						animate={
							isChevronActive ? { height: "fit-content" , display : 'block' } : { height: 0, display : 'none' }
						}
						style={{ overflow: "hidden" }}
					>
						<div className="row sb vc">
              <p className="cc_16">paid to administration</p>
              <p className="Payment__card__statusText--done cc_22 bold">PAID</p>
            </div>
					</motion.div>
				</div>

			</div>
		</div>
	);
}

export default Payment;
