import React, { useEffect, useState } from "react";
import QuesBox from "./QuesBox";
import "./clubFeed";
import Post from "./Post";
import db from "../firebase";

function ClubFeed(props) {
  const [posts, setPosts] = useState([]);
  // const [new,setnew]=useState();

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
    <div className="clubfeed">
    
      <QuesBox />

      
      {posts.map(({ id, questions }) => {
        if(questions.quesClub===props.name) {
          return <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
        }
})}
    </div>
  );
}

export default ClubFeed;
