import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import EditProfile from "./components/profile/EditProfile";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, setUser } = useAuth();

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <Routes>
        <Route path="/social-media/register" element={<Register />} />
        <Route path="/social-media/login" element={<Login />} />
        <Route path="/social-media/profile" element={<Profile />} />
        <Route
          path="/social-media/edit-profile"
          element={
            user ? <EditProfile user={user} onUpdate={handleUserUpdate} /> : <Navigate to="/social-media/login" />
          }
        />
        <Route path="/social-media" element={<Home />} />
        <Route path="*" element={<Navigate to="/social-media/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
