import React from "react";
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    if (location.pathname === "/social-media/profile") {
      navigate("/social-media/edit-profile");
    } else {
      navigate("/social-media/profile");
    }
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Natsri social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="search for friend, post, video here" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src={user?.profilePicture ? `http://localhost:5000${user.profilePicture}` : "/assets/person/2.png"}
          alt="profile"
          className="topbarImg"
          style={{ cursor: "pointer" }}
          onClick={handleProfileClick}
        />
      </div>
    </div>
  );
}

export default Topbar;
