import React, { useEffect, useState } from "react";
import Feed from "../feed/Feed";
import "./Profile.css";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

function Profile() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user") || "null"));

  useEffect(() => {
    const handleStorage = () => {
      setUser(JSON.parse(localStorage.getItem("user") || "null"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/4.jpg" alt="" />
              <img
                className="profileUserImg"
                src={user?.profilePicture ? `http://localhost:5000${user.profilePicture}` : "assets/person/10.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username || "Username"}</h4>
              <span className="profileInfoDesc">{user?.bio || "About me..."}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="profileFeedWrapper">
              <Feed userId={user?._id} />
            </div>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
