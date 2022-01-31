import React from "react";
import Feed from "../feed/Feed";
import "./Profile.css";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/4.jpg" alt="" />
              <img className="profileUserImg" src="assets/person/10.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Hunter Payne</h4>
              <span className="profileInfoDesc">Hello Friends!!!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
