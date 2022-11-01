import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import StudentAdd from "./AdminScreens/StudentAdd/StudentAdd";
import Student from "./AdminScreens/Student/Student";
import StudentView from "./AdminScreens/StudentView/StudentView";
import Profile from "./StudentScreens/Profile/Profile";
import Payment from "./StudentScreens/Payment/Payment";
import DashBoardTemplate from "./Templates/DashBoardTemplate";

function App() {
	useEffect(() => {
		const e = document.getElementsByClassName("Dashboard__content__overlay");
		for (let i = 0; i < e.length; ++i) {
			const elem = e.item(i) as HTMLElement;
			elem.addEventListener("click", () => {
				elem.style.display = "none";
			});
		}
	});
	return (
		<Routes>
			<Route path={"/lkasdf"} element={<Profile />} />
			<Route path={"/student"} element={<Student/>} />
			<Route path={"/"} element={<DashBoardTemplate navList={[]} heading={"heading"}>
				
			</DashBoardTemplate>} />
			<Route path={":studentRoll"} element={<StudentView />} />
			<Route path={"/studentAdd"} element={<StudentAdd />} />
			<Route path={"/asdf"} element={<Payment />}/>
		</Routes>
	);
}

export default App;
