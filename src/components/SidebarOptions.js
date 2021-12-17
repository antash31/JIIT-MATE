import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";
import clubsPage from "./clubsPage";
import {useState} from "react";

let clubs = ["ABHIVAKTI", "JODC", "CINEKALA", "FORTISSMO", "SPORTS CLUBS"];

function SidebarOptions(props) {

 const rightSub=(e)=>{
  props.changeName(e.target.innerText);     
 }

  return (
    <div className="sidebarOptions">
      <h3>CLUBS</h3>
      
      <div className="sidebarOption">
      {/* <Link to="/clubsPage"> */}
        {clubs.map((user) => {
          

          return  <button class="sidebarButton" onClick={rightSub}>{user}</button>;
        })}
        {/* </Link> */}
        
      </div>
      
    </div>
  );
}

export default SidebarOptions;
