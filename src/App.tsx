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
import AdminMessProfile from "./AdminScreens/AdminMessProfile/AdminMessProfile";
import Semester from "./AdminScreens/Semester/Semester";
import MessChangeApplication from "./AdminScreens/MessChangeApplcation/MessChangeApplication";
import MessStudentProfile from "./MessScreens/StudentProfile/MessStudentProfile";


function StudentRoutes() {
  return (
    <Routes>
			<Route path="/invoice" element={<Invoice/>} />
			<Route path="/mess" element={<Mess/>} />
			<Route path="/payment" element={<Payment/>} />
			<Route path="/profile" element={<Profile/>} />
			<Route path={"/mail"} element={<MailView/>} />
		</Routes>
  )
}

function AdminRoutes() {
  return (
    <Routes>
			<Route path={"/students"} element={<AdminStudentView />} />
			<Route path={"/studentProfile/:studentRollNumber"} element={<StudentProfile/>} />
			<Route path={"/asdfd"} element={<AdminMessView/>} />	
			<Route path={"/profile"} element={<AdminMessProfile/>} />	
			<Route path={"/semester"} element={<Semester/>} />
			<Route path={"/mail"} element={<MailView/>} />
			<Route path={"/"} element={<MessChangeApplication/>} />
		</Routes>
  )
}

function MessRoutes() {
	return(
		<Routes>
			<Route path={'/profile'} element = {<MessProfile/>}/>
			<Route path={'/students'} element = {<MessStudentView/>} />
			<Route path={'/extraEntry'} element = {<ExtraEntry/>} />
			<Route path={'/cancellation'} element={<Cancellation/>} />
			<Route path={'/messInvoice'} element={<MessInvoice/>} />
			<Route path={'/feedback'} element={<Feedback/>} />
			<Route path={"/mail"} element={<MailView/>} />	
			<Route path={"/studentProfile/:rollNumber"} element={<MessStudentProfile/>} />
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
		<MessRoutes/>
	);
}

export default App;
