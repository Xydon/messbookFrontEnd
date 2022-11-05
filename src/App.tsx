import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import StudentAdd from "./AdminScreens/StudentAdd/StudentAdd";
import AdminStudentView from "./AdminScreens/Student/Student";
import StudentProfile from "./AdminScreens/StudentProfile/StudentProfile";
import Profile from "./StudentScreens/Profile/Profile";
import Payment from "./StudentScreens/Payment/Payment";
import Mess from "./StudentScreens/Mess/Mess";
import MailView from "./MailScreens/MailView/MailView";
import Invoice from "./StudentScreens/Invoice/Invoice";
import MessProfile from "./MessScreens/Profile/MessProfile";
import { StudentView as MessStudentView } from "./MessScreens/StudentView/StudentView";
import ExtraEntry from "./MessScreens/ExtraEntry/ExtraEntry";
import Cancellation from "./MessScreens/Cancellation/Cancellation";
import MessInvoice from "./MessScreens/Invoice/MessInvoice";
import Feedback from "./MessScreens/Feedback/Feedback";
import AdminMessView from "./AdminScreens/AdminMessView/AdminMessView";


function StudentRoutes() {
  return (
    <Routes>
			<Route path={"/"} element={<Invoice />} />
			<Route path={"/profile"} element={<Profile />} />
			<Route path={"/student"} element={<AdminStudentView/>} />
			<Route path={"/mess"} element={<Mess/>} />
			<Route path={"/mailview"} element={<MailView/>} />
			<Route path={":studentRoll"} element={<StudentProfile />} />
			<Route path={"/studentAdd"} element={<StudentAdd />} />
			<Route path={"/asdf"} element={<Payment />}/>
		</Routes>
  )
}

function AdminRoutes() {
  return (
    <Routes>
			<Route path={"/asdf"} element={<AdminStudentView />} />
			<Route path={"/studentProfile/:studentRollNumber"} element={<StudentProfile/>} />
			<Route path={"/"} element={<AdminMessView/>} />	
		</Routes>
  )
}

function MessRoutes() {
	return(
		<Routes>
			<Route path={'/profile'} element = {<MessProfile/>}/>
			<Route path={'/a'} element = {<MessStudentView/>} />
			<Route path={'/b'} element = {<ExtraEntry/>} />
			<Route path={'/c'} element={<Cancellation/>} />
			<Route path={'/messInvoice'} element={<MessInvoice/>} />
			<Route path={'/'} element={<Feedback/>} />
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
		<AdminRoutes/>
	);
}

export default App;
