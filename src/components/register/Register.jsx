import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Natsri Social</h3>
          <span className="registerDesc">connect with friends and the world around you on Natsri Social</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <button className="registerButton">Sign Up</button>

            <button className="registerButton">Log in into your Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
