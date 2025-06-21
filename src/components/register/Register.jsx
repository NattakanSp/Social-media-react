import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      // สมัครเสร็จ login อัตโนมัติ
      login(data);
      navigate("/social-media/profile");
    } else {
      alert(data.error || "Registration failed");
    }
  };

  return (
    <div className="registerPage">
      <form className="registerForm" onSubmit={handleRegister}>
        <h2 className="registerTitle">Sign Up</h2>
        <input className="registerInput" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          className="registerInput"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
