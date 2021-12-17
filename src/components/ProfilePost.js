import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Modal from "react-modal";
import db from "../firebase";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";

function ProfilePost({
  Id,
  question,
  imageUrl,
  timestamp,
  users,
  currUser,
  usersEmail,
}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);

  const likesIncrementHandler = () => {
    setLikes((like) => like + 1);
  };

  const dislikesIncrementHandler = () => {
    setDisLikes((dislike) => dislike + 1);
  };

  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              answers: doc.data(),
              questions: doc.data(),
            }))
          )
        );
    }
  }, [questionId]);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        user: user,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log(questionId);
    setAnswer("");
    setIsModalOpen(false);
  };

  return (
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
      {/*------Post INFORMATION--------*/}
      <div className="post__info">
        <Avatar
          src={
            users.photo
              ? users.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
        />
        <h4>{users.displayName ? users.displayName : users.email}</h4>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
      {/*-----------------------------*/}

      {/*-------Post Body----------------*/}
      <div className="post__body">
        <div className="post__question">
          <p>{question}</p>

          {/* {usersEmail == currUser ? <p>{1}</p> : null} */}
          {/* {<p> {questions.email} </p>} */}
          {/*-----------------------------*/}

          {/*------------------- THE ANSWER BUTTON --------------*/}
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            ANSWER
          </button>
          {/*---------------------------------------------------------*/}

          {/*--------------Answer Model-------------------*/}
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "#1b262c",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
                fontFamily: "Outfit, sans-serif",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                Asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                CANCEL
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                ADD ANSWER
              </button>
            </div>
          </Modal>
        </div>
        {/*------------------------------------------------------*}

        {/*-------------------POST ANSWERS----------------------*/}
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#bbe1fa" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        {/*-------------------------------------------------------*/}
        <img src={imageUrl} alt="" />
      </div>

      {/*---------------------POST FOOTING-----------------*/}
      <div className="post__footer">
      <span onClick={likesIncrementHandler}>
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon /> 
            {likes}
            </div>
        </span>
        <span onClick={dislikesIncrementHandler}>
        <div className="post__footerAction">
          <ArrowDownwardOutlinedIcon />
          <div className="post__symbols">
          {dislikes}
          </div>
          </div>
          </span>
        
        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      {/*--------------------------------------*/}
    </div>
  );
}

export default ProfilePost;
