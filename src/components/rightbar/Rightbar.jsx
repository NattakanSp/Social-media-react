import React from "react";
import "./Rightbar.css";
import { Cake } from "@mui/icons-material";

function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdateContainer">
            <Cake htmlColor="red" className="birthdayImg" style={{ fontSize: 30 }} />
            <span className="birthdayText">
              <b>Natasha White</b> and <b>4 other friends</b> have a birthday today
            </span>
          </div>
          <img src="/assets/post/ads.jpg" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileContainer">
                <img className="rightbarProfileImg" src="/assets/person/4.jpg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Wendy Bird</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Rightbar;
