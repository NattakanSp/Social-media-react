import React, { useState, useEffect } from "react";
import "./Post.css";
import { MoreVert, Edit, Delete, Recommend, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Post({ post, onUpdate, onDelete, currentUser }) {
  const [like, setLike] = useState(post.like || 0);
  const [isLike, setIsLike] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(post.desc);
  const [editFile, setEditFile] = useState(null);
  const [user, setUser] = useState(null);

  // For comment actions menu
  const [openMenuCommentId, setOpenMenuCommentId] = useState(null);

  const navigate = useNavigate();

  // Fetch user info
  useEffect(() => {
    async function fetchUser() {
      const id = typeof post.userId === "string" ? post.userId : post.userId?._id;
      if (id) {
        const res = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await res.json();
        setUser(data);
      }
    }
    fetchUser();
  }, [post.userId]);

  // Fetch comments
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchComments() {
      if (!post._id) return;
      const res = await fetch(`http://localhost:5000/api/comments/post/${post._id}`);
      const allComments = await res.json();
      setComments(allComments);
    }
    fetchComments();
  }, [post._id]);

  const [commentInput, setCommentInput] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");

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

  // Add comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentInput.trim() || !currentUser || !currentUser._id) return;
    await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: post._id, userId: currentUser._id, text: commentInput }),
    });
    // Fetch comments again after adding
    const res = await fetch(`http://localhost:5000/api/comments/post/${post._id}`);
    const allComments = await res.json();
    setComments(allComments);
    setCommentInput("");
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    setOpenMenuCommentId(null);
    if (!window.confirm("Delete this comment?")) return;
    await fetch(`http://localhost:5000/api/comments/${commentId}`, {
      method: "DELETE",
    });
    // Fetch comments again after deleting
    const res = await fetch(`http://localhost:5000/api/comments/post/${post._id}`);
    const allComments = await res.json();
    setComments(allComments);
  };

  // Edit comment
  const handleEditComment = (comment) => {
    setEditingCommentId(comment._id);
    setEditingCommentText(comment.text);
    setOpenMenuCommentId(null);
  };

  const handleEditCommentSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/comments/${editingCommentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: editingCommentText }),
    });
    // Fetch comments again after editing
    const res = await fetch(`http://localhost:5000/api/comments/post/${post._id}`);
    const allComments = await res.json();
    setComments(allComments);
    setEditingCommentId(null);
    setEditingCommentText("");
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user?.profilePicture
                  ? user.profilePicture.startsWith("http")
                    ? user.profilePicture
                    : `http://localhost:5000${user.profilePicture}`
                  : "/assets/person/default.jpg"
              }
              alt=""
              className="postProfileImg"
            />
            <span
              className="postUsername"
              style={{ cursor: "pointer", color: "#1775ee" }}
              onClick={() => user?._id && navigate(`/social-media/profile/${user._id}`)}
            >
              {user?.username || "Unknown"}
            </span>
            <span className="postDate">
              {post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "")}
            </span>
          </div>
          <div className="postTopRight" style={{ position: "relative" }}>
            {currentUser && currentUser._id === post.userId && (
              <>
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
              </>
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
            <span className="postCommentText">{comments.length} comments</span>
          </div>
        </div>
        {/* Comments Section */}
        <div className="postComments">
          <form onSubmit={handleAddComment} className="commentForm">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder={currentUser ? "Write a comment..." : "Login to comment"}
              className="commentInput"
              disabled={!currentUser}
            />
            <button type="submit" className="commentBtn" disabled={!currentUser}>
              Add
            </button>
          </form>
          <ul className="commentList">
            {comments.map((comment) => (
              <li key={comment._id} className="commentItem" style={{ position: "relative" }}>
                {editingCommentId === comment._id ? (
                  <form onSubmit={handleEditCommentSubmit} className="editCommentForm">
                    <input
                      type="text"
                      value={editingCommentText}
                      onChange={(e) => setEditingCommentText(e.target.value)}
                      className="editCommentInput"
                    />
                    <button type="submit" className="commentBtn">
                      Save
                    </button>
                    <button type="button" className="commentBtn" onClick={() => setEditingCommentId(null)}>
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <span className="commentText">{comment.text}</span>
                    <button
                      className="commentActionsMenuBtn"
                      type="button"
                      onClick={() => setOpenMenuCommentId(openMenuCommentId === comment._id ? null : comment._id)}
                    >
                      <MoreVert fontSize="small" />
                    </button>
                    {openMenuCommentId === comment._id && (
                      <div className="commentActionsMenu">
                        <div className="commentActionsMenuItem" onClick={() => handleEditComment(comment)}>
                          <Edit fontSize="small" style={{ marginRight: 4 }} /> Edit
                        </div>
                        <div className="commentActionsMenuItem" onClick={() => handleDeleteComment(comment._id)}>
                          <Delete fontSize="small" style={{ marginRight: 4, color: "#e53935" }} /> Delete
                        </div>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
