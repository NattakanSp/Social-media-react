import React, { useState } from "react";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

function EditProfile({ user, onUpdate }) {
  const [username, setUsername] = useState(user ? user.username : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  if (!user) return <div>Loading...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("bio", bio);
    if (file) formData.append("profilePicture", file);

    const res = await fetch(`http://localhost:5000/api/users/${user._id}`, {
      method: "PUT",
      body: formData,
    });
    const updatedUser = await res.json();
    onUpdate(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/social-media/profile");
  };

  const previewImg = file
    ? URL.createObjectURL(file)
    : user.profilePicture
    ? `http://localhost:5000${user.profilePicture}`
    : "/assets/person/default.jpg";

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="edit-profile-img-section">
          <label htmlFor="profilePicInput" style={{ cursor: "pointer" }}>
            <img
              className="edit-profile-img-preview"
              src={previewImg}
              alt="Profile Preview"
              title="Click to change profile picture"
            />
          </label>
        </div>
        <input
          id="profilePicInput"
          className="edit-profile-file"
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="edit-profile-field">
          <label className="edit-profile-label">Username</label>
          <input
            className="edit-profile-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="edit-profile-field">
          <label className="edit-profile-label">Email</label>
          <input className="edit-profile-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="edit-profile-field">
          <label className="edit-profile-label">Bio</label>
          <textarea className="edit-profile-input" value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
        </div>
        <button className="edit-profile-btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
