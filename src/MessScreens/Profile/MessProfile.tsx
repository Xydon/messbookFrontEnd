import axios from "axios";
import React, { useEffect, useState } from "react";
import Extra_item_menu from "../../Entities/Extra_item_menu";
import Semester_details from "../../Entities/Semester_details";
import ConfigDetailsGroup, {
	DetailsGroupList,
} from "../../ProjectComponents/AdminDetailsGroup";
import Notification from "../../ProjectComponents/Notification";
import Subheading from "../../ProjectComponents/Subheading";
import DashBoardTemplate from "../../Templates/DashBoardTemplate";
import MessRouterConfig from "../routerConfig";

import "./MessProfile.css";

function MessProfile() {
	// data 
	const [extraItems, setExtraItems] = useState<Array<Extra_item_menu>>([]); 
	const [currentSemester, setCurrentSemester] = useState<Semester_details>(); 

	// effects 
	useEffect(() => {
		axios.get('api/college/extra_items_menu').then(val => {
			const data = val.data.response; 
			setExtraItems(data); 
		}).catch(e => console.log(e)); 
	}, [])

	useEffect(() => {
		axios.get('api/semester/latestSemester').then(val => {
			const data = val.data.response;
			console.log(data);  
			setCurrentSemester(data); 
		}).catch(e => console.log(e)); 
	}, [])

	const DetailsConfig = {
		heading: "Details",
		rows: [
			{ label: "Name", text: "sunderlal" },
			{ label: "Hostel Name", text: "hostel name" },
			{ label: "Phone Number", text: "9369074016" },
			{ label: "C Mail Id", text: "mess@cmail.com" },
		],
	};

	return (
		<DashBoardTemplate heading="Profile" navList={MessRouterConfig}>
			<div className="row mb-5">
				<div className="box p-2 col-6">
					<Notification benefactor={undefined} />
				</div>

				<div className="col-6 p-2 pl-10">
					{ConfigDetailsGroup(DetailsConfig)}
				</div>

				<div className="col-6 p-5">
					<Subheading text="Semester Details" />
					<DetailsGroupList label={"Starts On"} text={JSON.stringify(currentSemester?.start_date)} />
					<div className="box mb-6">
						<DetailsGroupList label={"Ends On"} text={JSON.stringify(currentSemester?.end_date)} />
					</div>
				</div>

				<div className="col-6 p-5">
					<Subheading text="Extra Items Menu" />
					{/* <DetailsGroupList label="item name" text="price" />
					<DetailsGroupList label="item name" text="price" /> */}
					{
						extraItems.map(val => <DetailsGroupList label={val.name} text={val.price.toString()}/>)
					}

				</div>
			</div>
		</DashBoardTemplate>
	);
}

export default MessProfile;
