import React from 'react'

import "./AbsentCalculator.css"; 
import ListItem from './ListItem';

// todo -- CHANGE THE LIST ITEM 
function DateList() {
  return(
    <div className="DateListRow row sb">
      <div className="dateNumberBox hc vc mr-2 flex">
        <p className="cc_16" style={{userSelect : 'none'}}>01</p>
      </div>
      <div className="col">
        <ListItem size='m'>

        </ListItem>
      </div>
    </div>
  )
}

function AbsentCalculator() {
  return (
    <div className='AbsentCalculator round-32 p-6 dir-col flex'>
      <p className="cc_22 semi_bold">Mess Entry</p>
      <p className="cc_16 mb-2">October</p>

      <div className="dateContainer">
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
        <DateList/>
      </div>

    </div>
  )
}

export default AbsentCalculator