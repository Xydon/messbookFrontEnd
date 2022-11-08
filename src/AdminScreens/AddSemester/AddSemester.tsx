import React from 'react'
import DashBoardTemplate from '../../Templates/DashBoardTemplate';
import AdminRouterConfig from '../routerConfig';

import "./AddSemester.css"; 

function AddSemester() {
  return (
    <DashBoardTemplate navList={AdminRouterConfig} heading={'Add Semester'}>
      
    </DashBoardTemplate>
  )
}

export default AddSemester