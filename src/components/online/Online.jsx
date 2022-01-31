import React from "react";
import "./Online.css";

function Online({ profile, username }) {
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarProfileContainer">
          <img className="rightbarProfileImg" src={profile} />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{username}</span>
      </li>
    </>
  );
}

export default Online;
