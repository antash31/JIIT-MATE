import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";
import {useState} from 'react';



function Sidebar(props) {
  return (
    <div className="sidebar">
      <SidebarOptions changeName={props.changeName}/>
    </div>
  );
}

export default Sidebar;
