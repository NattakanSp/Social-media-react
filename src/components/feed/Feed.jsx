import React, { useEffect, useState } from "react";
import "./Feed.css";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";

function Feed({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = userId
      ? `http://localhost:5000/api/posts/user/${userId}` // ถ้ามี userId (หน้าโปรไฟล์)
      : "http://localhost:5000/api/posts"; // ถ้าไม่มี (หน้าหลัก)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [userId]);

  const handleUpdate = (updatedPost) => {
    setPosts((posts) => posts.map((p) => (p._id === updatedPost._id ? updatedPost : p)));
  };

  const handleDelete = (deletedId) => {
    setPosts((posts) => posts.filter((p) => p._id !== deletedId));
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
