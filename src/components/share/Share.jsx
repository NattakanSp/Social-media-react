import React, { useState } from "react";
import "./Share.css";
import { PermMedia } from "@mui/icons-material";

function Share() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const userId = user?._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("userId", userId);
    if (file) {
      formData.append("photo", file);
    }
    try {
      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setTitle("");
        setDesc("");
        setFile(null);
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="share">
      <form className="shareForm" onSubmit={handleSubmit}>
        <div className="shareTop">
          <img className="shareProfileImg" src={user?.profilePicture || "/assets/person/8.jpg"} alt="" />
          <div className="shareInputs">
            <textarea
              className="shareTextarea"
              placeholder="What's on your mind?"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={2}
            />
          </div>
        </div>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <button type="button" className="shareImgRemove" onClick={() => setFile(null)}>
              ×
            </button>
          </div>
        )}
        <div className="shareBottom">
          <label htmlFor="file" className="shareOption">
            <PermMedia htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Photo/Video</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <button className="shareButton" type="submit">
            Share
          </button>
        </div>
      </form>
    </div>
  );
}

export default Share;
