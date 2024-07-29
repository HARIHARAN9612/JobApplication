import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
import "./Signup.css";
import axios from 'axios';

const Signup = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [role, setRole] = useState("Candidate"); // State to track role

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { email, password };

    try {
      const url = role === "Recruiter" ? 'http://localhost:8080/recruiters' : 'http://localhost:8080/candidates';
      await axios.post(url, userData);
      alert("Registration successful");
      toggleForm("login");
    } catch (error) {
      console.error("There was an error!", error);
      alert("Registration failed. Please try again.");
    }

    setEmail("");
    setPassword("");
    setCpassword("");
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="outer">
      <div className="Loginbox">
        <button className="close-button" onClick={() => toggleForm(null)}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>Signup From here</h1>
        </div>
        <div className="logsign">
          <p>Signup as </p>
          <select 
            className="role-dropdown"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Candidate">Candidate</option>
            <option value="Recruiter">Recruiter</option>
          </select>
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
            onKeyPress={handleKeyPress}
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
            onKeyPress={handleKeyPress}
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
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="forget">
          <label>
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
