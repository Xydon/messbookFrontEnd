import React from 'react'
import { Link } from 'react-router-dom';
import Student from '../Entities/Student';

function StudentProfileList(props: Student) {
	return (
		<Link to={`/studentProfile/${props.roll_number}`}>
			<div className="row vc cp">
				<div className="profileImageBox mr-2"></div>
				<div className="profileTextBox">
					<p className="cc_18">{props.name}</p>
					<p className="cc_14">{props.roll_number}</p>
				</div>
			</div>
		</Link>
	);
}

export default StudentProfileList