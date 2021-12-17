import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Modal from "react-modal";
import "./Header.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { ExpandMore } from "@material-ui/icons";
import firebase from "firebase";
import Profile from "./pages/profile/Profile";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function Header() {
  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [questionClub,setquestionClub]=useState("");
  const questionName = input;

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        quesClub:questionClub,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="Header">
      {/*-----------*/}
      <div className="Header__logo">JIIT-MATE</div>
      {/*-----------*/}
      <div className="Header__icons">
        <Link to="/mFeed">
          <div className="active Header__icon">
            <HomeIcon />
          </div>
        </Link>

        <div className="Header__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="Header__icon">
          <NotificationsOutlinedIcon />
        </div>
      </div>
      {/*-----------*/}
      <div className="Header__Rem">
        {/*-----------*/}
        <Button onClick={() => setIsModalOpen(true)} className="addButton">
          ADD QUESTION
        </Button>

        {/*-------ADD QESTION MODAL-------------------------------*/}
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "black",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          {/*-------MODAL TITLE-------------------------------------*/}
          <div className="modal__title">
            <h5>ADD QUESTION</h5>
           
          </div>
          {/*-------MODAL INFO-------------------------------------*/}
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
           
          </div>

          {/*-------MODAL FIELD-------------------------------------*/}
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
             
              <form>
                <input
                  type="checkbox"
                  id="JODC"
                  name="JODC"
                  value="ABHIVAKTI"
                  onChange={(e) => setquestionClub(e.target.value)}
                ></input>
                <label for="JODC">ABHIVAKTI</label>
                <br />
                <input
                  type="checkbox"
                  id="JODC"
                  name="JODC"
                  value="JODC"
                  onChange={(e) => setquestionClub(e.target.value)}
                ></input>
                <label for="JODC">JODC</label>
                <input
                  type="checkbox"
                  id="SPORTS CLUB"
                  name="SPORTS CLUB"
                  value="SPORTS CLUB"
                  onChange={(e) => setquestionClub(e.target.value)}
                ></input>
                 <label for="JODC">SPORTS CLUB</label>
                <br />
              </form>
            </div>
          </div>

          {/*-------MODAL BUTTONS-------------------------------------*/}
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>

        {/*-------MODAL ENDS-------------------------------------*/}

        {/*-----------*/}
        <div className="logout" onClick={() => auth.signOut()}>
          <h5>LOG OUT</h5>
        </div>
        {/*-----------*/}
        <div className="Header__avatar">
         
          <Link to="/profile">
            <Avatar
              className="Avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
          </Link>
        </div>
        {/*-----------*/}
      </div>
    </div>
  );
}

export default Header;
