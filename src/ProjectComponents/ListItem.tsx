import React from "react";

import "./ListItem.css";

function ListItem(props: {children : React.ReactNode, size : 's'|'m'|'l', order ?: number}) {
	let height = 40; 

	if(props.order !== undefined) {
		height = (props.order + 5) * 8; 
	}else	if(props.size == 'l') {
		height = 64; 
	} else if(props.size == 'm') {
		height = 48
	} else if(props.size == 's') {
		height = 44; 
	}

	return (
		<div className="ListItem flex sb pl-2 pr-2 round-8 vc mb-1" style={{height}}>
      {props.children}
		</div>
	);
}

export default ListItem;
