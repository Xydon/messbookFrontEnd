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
import Mess from "./StudentScreens/Mess/Mess";

function StudentRoutes() {
  return (
    <Routes>
			<Route path={"/lkasdf"} element={<Profile />} />
			<Route path={"/student"} element={<Student/>} />
			<Route path={"/"} element={<Mess/>} />
			<Route path={":studentRoll"} element={<StudentView />} />
			<Route path={"/studentAdd"} element={<StudentAdd />} />
			<Route path={"/asdf"} element={<Payment />}/>
		</Routes>
  )
}

function AdminRoutes() {
  return (
    <Routes>
			<Route path={"/abcd"} element={<Profile />} />
		</Routes>
  )
}


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
	
	const type = "student"; 

	let Comp = <></>; 

	//@ts-ignore
	if(type == 'student') Comp = <StudentRoutes/>; 
	else Comp = <AdminRoutes/>

	return (
		Comp
	);
}

export default App;
