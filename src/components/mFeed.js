import React, { useEffect, useState } from "react";
import QuesBox from "./QuesBox";
import "./mFeed.css";
import Post from "./Post";
import db from "../firebase";

function MFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="mfeed">
      {/* {console.log(posts.questions.quesClub)}; */}
      <QuesBox />
      {console.log(posts)}
      {posts.map(({ id, questions }) => (
         
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        ></Post>
      ))}
    </div>
  );
}

export default MFeed;
