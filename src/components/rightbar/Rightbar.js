import "./rightbar.css";
import { Users } from "../dummyData";
import { Link, Route } from "react-router-dom";
import Info from "../info";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
       
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ABOUT</h4>

        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Branch:</span>
            <span className="rightbarInfoValue">CSE</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Year:</span>
            <span className="rightbarInfoValue">3</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Sector:</span>
            <span className="rightbarInfoValue">128</span>
          </div>
        </div>
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
        <Link to = '/info'> <button className="editProfile">EDIT PROFILE</button></Link>
      </div>
      
    </div>
  );
}
