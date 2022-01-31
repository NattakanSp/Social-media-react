import React from "react";
import "./Rightbar.css";
import { Cake } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdateContainer">
          <Cake htmlColor="red" className="birthdayImg" style={{ fontSize: 30 }} />
          <span className="birthdayText">
            <b>Natasha White</b> and <b>4 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/post/ads.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} profile={u.profilePicture} username={u.username} />
          ))}
        </ul>
      </>
    );
  };

  const Profilerightbar = ({ profile }) => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInforValue">Bangkok</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInforValue">Surat thani</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInforValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Clark Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Clark Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Clark Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Clark Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Clark Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Clark Wilson</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Profilerightbar />
      </div>
    </div>
  );
}

export default Rightbar;
