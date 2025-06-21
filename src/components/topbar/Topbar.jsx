import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [friendRequestCount, setFriendRequestCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function fetchFriendRequests() {
      if (!user?._id) return;
      try {
        const res = await fetch(`http://localhost:5000/api/friends/requests/${user._id}`);
        const data = await res.json();
        setFriendRequestCount(data?.length || 0);
      } catch {
        setFriendRequestCount(0);
      }
    }
    fetchFriendRequests();
  }, [user?._id]);

  const handleProfileClick = () => {
    if (location.pathname === `/social-media/profile/${user?._id}`) {
      navigate("/social-media/edit-profile");
    } else {
      navigate(`/social-media/profile/${user?._id}`);
    }
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social media</span>
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
            <span className="topbarIconBadge">{friendRequestCount}</span>
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
