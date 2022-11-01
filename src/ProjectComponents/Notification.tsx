import React from 'react'
import { NotificationProp } from '../props';

import './Notification.css'; 

function NotificationList() {
  return(
    <div className="row NotificationList">
      <div className="col-2 titleBox">
        <p className="cc_18">Title</p>
        <p className="cc_11">12/08/2022</p>
      </div>
      <div className="col pr-2 pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nisi?</div>
    </div>
  )
}

function Notification() {
  return (
    <>
      <p className="cc_27 medium mb-5 mt-4">Notification</p>
      <div className="notificationContainer mb-9">
        <NotificationList />
        <NotificationList />
        <NotificationList />
        <NotificationList />
      </div>
    </>
  )
}

export default Notification