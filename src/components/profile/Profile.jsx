import React, { useEffect, useState } from "react";
import Feed from "../feed/Feed";
import "./Profile.css";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

function Profile() {
  const { user: currentUser } = useAuth();
  const { userId } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const [isFriend, setIsFriend] = useState(false);
  const [hasSentRequest, setHasSentRequest] = useState(false);
  const [hasReceivedRequest, setHasReceivedRequest] = useState(false);

  useEffect(() => {
    async function fetchProfileUser() {
      if (!userId) return;
      const res = await fetch(`http://localhost:5000/api/users/${userId}`);
      const data = await res.json();
      setProfileUser(data);
    }
    fetchProfileUser();
  }, [userId]);

  useEffect(() => {
    async function fetchFriendStatus() {
      if (!currentUser?._id || !userId || currentUser._id === userId) return;
      const res = await fetch(`http://localhost:5000/api/friends/status/${currentUser._id}/${userId}`);
      const data = await res.json();
      setIsFriend(data.isFriend);
      setHasSentRequest(data.hasSentRequest);
      setHasReceivedRequest(data.hasReceivedRequest);
    }
    fetchFriendStatus();
  }, [currentUser, userId]);

  const sendFriendRequest = async () => {
    await fetch(`http://localhost:5000/api/friends/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: currentUser._id, to: userId }),
    });
    setHasSentRequest(true);
  };

  const cancelFriendRequest = async () => {
    await fetch(`http://localhost:5000/api/friends/cancel`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: currentUser._id, to: userId }),
    });
    setHasSentRequest(false);
  };

  const acceptRequest = async () => {
    await fetch(`http://localhost:5000/api/friends/accept`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: userId, to: currentUser._id }),
    });
    setIsFriend(true);
    setHasReceivedRequest(false);
  };

  const denyRequest = async () => {
    await fetch(`http://localhost:5000/api/friends/deny`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: userId, to: currentUser._id }),
    });
    setHasReceivedRequest(false);
  };

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
                src={
                  profileUser?.profilePicture
                    ? `http://localhost:5000${profileUser.profilePicture}`
                    : "assets/person/10.jpg"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{profileUser?.username || "Username"}</h4>
              <span className="profileInfoDesc">{profileUser?.bio || "About me..."}</span>
              {currentUser?._id !== userId && (
                <div style={{ marginTop: 10 }}>
                  {isFriend ? (
                    <button disabled>Friends</button>
                  ) : hasSentRequest ? (
                    <button onClick={cancelFriendRequest}>Cancel Request</button>
                  ) : hasReceivedRequest ? (
                    <>
                      <button onClick={acceptRequest}>Accept</button>
                      <button onClick={denyRequest}>Deny</button>
                    </>
                  ) : (
                    <button onClick={sendFriendRequest}>Add Friend</button>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="profileFeedWrapper">
              <Feed userId={userId} />
            </div>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
