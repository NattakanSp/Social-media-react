import React from "react";
import "./Feed.css";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {Posts.map((item) => (
            <Post key={item.id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
