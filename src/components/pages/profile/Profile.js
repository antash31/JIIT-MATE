import "./profile.css";
//import Topbar from "../../topbar/Topbar";
import Header from "../../Header";
import Leftbar from "../../leftbar/leftbar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";

import db from "../../../firebase";

import { selectUser } from "../../../features/userSlice";

function Profile() {
  const user = useSelector(selectUser);
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    db.collection("form").onSnapshot((snapshot) => {
      setCustomersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log({ customersData });
  }, []);

  return (
    <>
      {/* <Topbar /> */}
      <Header />
      <div className="profile">
        {/* <Leftbar /> */}
        {/*------------------------------------*/}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.png"
                alt=""
              />
            </div>

            {/*--------------------------------------*/}
            <div className="profileInfo">
              <h4 className="profileInfoName">lsz</h4>
              <span className="profileInfoDesc">dzlfn</span>
            </div>
            {/*--------------------------------------*/}
          </div>

          <div className="content">
            <div className="profileRightBottom">
              <Feed className="ProfileFeedCss" />
              <Rightbar profile />
            </div>
          </div>
        </div>
        {/*--------------------------------------*/}
      </div>
    </>
  );
}

export default Profile;
