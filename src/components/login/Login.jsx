import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Natsri Social</h3>
          <span className="loginDesc">connect with friends and the world around you on Natsri Social</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
