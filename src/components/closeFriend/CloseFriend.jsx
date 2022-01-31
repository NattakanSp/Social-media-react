import React from "react";
import "./CloseFriend.css";

function CloseFriend({ profile, username }) {
  return (
    <>
      <li className="sidebarFriend">
        <img src={profile} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{username}</span>
      </li>
    </>
  );
}

export default CloseFriend;
