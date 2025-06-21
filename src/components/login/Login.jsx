import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const userData = await res.json();
      login(userData); // อัปเดต currentUser ใน context
      navigate("/social-media/profile");
    }
  };

  return (
    <div className="loginPage">
      <form className="loginForm" onSubmit={handleLogin}>
        <h2 className="loginTitle">Login</h2>
        <input className="loginInput" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          className="loginInput"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
