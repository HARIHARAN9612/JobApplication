import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
import "./Signup.css";

const Signup = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }
    // Store user data in local storage
    const userData = {
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    setEmail("");
    setPassword("");
    setCpassword("");
    alert("Registration successful");
    toggleForm("login"); // Switch to login form
  };

  return (
    <div className="outer">
      <div className="Loginbox">
        <button className="close-button" onClick={() => toggleForm(null)}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>Signup From here</h1>
          <p>
            Create your Account to continue <br /> and explore new jobs
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
        <div className="inputbox3">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm the password"
            required
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>
        <div className="forget">
          <label >
            Already have an account?{" "}
            <a href="#" onClick={() => toggleForm("login")}>
              Login
            </a>
          </label>
        </div>
        <div className="submitb">
          <button className="submit" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
