import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
import "./Login.css";

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful");
        // Proceed to the next part of your app
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("No user found. Please sign up.");
    }
  };

  return (
    <div className="outer">
      <div className="Loginbox1">
        <button className="close-button" onClick={() => toggleForm(null)}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>Login</h1>
          <p>
            Enter your credentials to login
          </p>
        </div>
        <div className="line"></div>
        <button className="social-button lkd">
          <FaLinkedin className="icon" /> <span>Log in With LinkedIn</span>
        </button>
        <button className="social-button gl">
          <FaGoogle className="icon" /> <span>Log in With Google</span>
        </button>
        <button className="social-button fb">
          <FaFacebook className="icon" /> <span>Log in With Facebook</span>
        </button>
        <div className="line"></div>
        <div className="inputbox1">
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputbox2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter the password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forget1">
        <span>Don't have an account?</span>
          <a href="#" onClick={() => toggleForm("signup")}>
            Sign Up
          </a>
        </div>
        <div className="submitb">
          <button className="submit" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
