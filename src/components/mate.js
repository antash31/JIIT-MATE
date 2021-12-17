import React from "react";
import MFeed from "./mFeed.js";
import Header from "./Header";
import "./mate.css";
import Sidebar from "./Sidebar";


function Mate() {
  return (
    <div className="mate">
      <Header />
      <div className="content">
        <Sidebar />
        <MFeed />
      </div>
    </div>
  );
}

export default Mate;
