import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed currentUser={user} />
        <Rightbar profile />
      </div>
    </>
  );
}
export default Home;
