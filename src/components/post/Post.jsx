import React, { useState } from "react";
import "./Post.css";
import { MoreVert, Edit, Delete, Recommend, Favorite } from "@mui/icons-material";

function Post({ post, onUpdate, onDelete }) {
  const [like, setLike] = useState(post.like || 0);
  const [isLike, setIsLike] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(post.desc);
  const [editFile, setEditFile] = useState(null);

  const handleLike = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  const handleMenu = () => setShowMenu((v) => !v);

  const handleEdit = () => {
    setEditing(true);
    setShowMenu(false);
  };

  const handleDelete = async () => {
    setShowMenu(false);
    if (window.confirm("Are you sure you want to delete this post?")) {
      await fetch(`http://localhost:5000/api/posts/${post._id}`, { method: "DELETE" });
      if (onDelete) onDelete(post._id);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("desc", editDesc);
    if (editFile) formData.append("photo", editFile);

    const res = await fetch(`http://localhost:5000/api/posts/${post._id}`, {
      method: "PUT",
      body: formData,
    });
    const updated = await res.json();
    setEditing(false);
    setEditFile(null);
    if (onUpdate) onUpdate(updated);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={post.userId?.profilePicture || "/assets/person/default.jpg"} alt="" className="postProfileImg" />
            <span className="postUsername">{post.userId?.username || "Unknown"}</span>
            <span className="postDate">
              {post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "")}
            </span>
          </div>
          <div className="postTopRight" style={{ position: "relative" }}>
            <MoreVert onClick={handleMenu} style={{ cursor: "pointer" }} />
            {showMenu && (
              <div className="postMenu">
                <div className="postMenuItem" onClick={handleEdit}>
                  <Edit fontSize="small" style={{ marginRight: 6 }} /> Edit
                </div>
                <div className="postMenuItem" onClick={handleDelete}>
                  <Delete fontSize="small" style={{ marginRight: 6, color: "#e53935" }} /> Delete
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="postCenter">
          {editing ? (
            <form onSubmit={handleEditSubmit}>
              <textarea
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
                className="editTextarea"
                rows={2}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setEditFile(e.target.files[0])}
                style={{ margin: "10px 0" }}
              />
              {/* รูป preview ตอน edit */}
              {(editFile || post.photo) && (
                <img
                  src={
                    editFile
                      ? URL.createObjectURL(editFile)
                      : post.photo && post.photo.startsWith("/uploads")
                      ? `http://localhost:5000${post.photo}`
                      : post.photo
                  }
                  alt=""
                  className="postImg"
                  style={{ marginTop: 10 }}
                />
              )}
              <button type="submit" className="editSaveBtn">
                Save
              </button>
            </form>
          ) : (
            <>
              <span>{post.desc || ""}</span>
              {post.photo && (
                <img
                  src={post.photo.startsWith("/uploads") ? `http://localhost:5000${post.photo}` : post.photo}
                  alt=""
                  className="postImg"
                />
              )}
            </>
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomeLeft">
            <Recommend className="likeIcon" htmlColor="blue" onClick={handleLike} />
            <Favorite className="likeIcon" htmlColor="red" onClick={handleLike} />
            <span className="postBottomCounter">{like} people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment || 0} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
