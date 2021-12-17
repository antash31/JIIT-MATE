import React, { useEffect, useState } from "react";
import QuesBox from "../QuesBox";
import "./feed.css";
import Post from "../Post";
import db, { auth } from "../../firebase";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Feed() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

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
    <div className="feed">
      <p className="postHeading">YOUR QUESTIONS</p>

      {posts.map(({ id, questions }) =>
        questions.user.email === user.email ? (
          <Post
            key={id}
            Id={id}
            question={questions.question}
            imageUrl={questions.imageUrl}
            timestamp={questions.timestamp}
            users={questions.user}
            currUser={user.email}
            usersEmail={questions.user.email}
          />
        ) : null
      )}
    </div>
  );
}

export default Feed;
