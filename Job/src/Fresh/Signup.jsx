import React, { useState, useRef } from "react";
import { FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import "./Signup.css";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

const Signup = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [role, setRole] = useState("Candidate");
  const googleButtonRef = useRef(null); // Create a ref for the Google login button

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { username, email, password };

    try {
      const url = role === "Recruiter" ? 'http://localhost:8081/recruiters' : 'http://localhost:8081/candidates';
      await axios.post(url, userData);
      alert("Registration successful");
      toggleForm("login");
    } catch (error) {
      console.error("There was an error!", error);
      alert("Registration failed. Please try again.");
    }

    setUsername("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // Handle the Google login success here
    // You might want to store the token and fetch user details from Google API
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  const handleCustomButtonClick = () => {
    if (googleButtonRef.current) {
      googleButtonRef.current.click(); // Programmatically trigger the Google login button click
    }
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
          <FaFacebook className="icon" /> <span>Log in With Facebook</span>
        </button>
        
        

        {/* Visible Google login button but styled to be small */}
        <div>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            useOneTap
            ref={googleButtonRef}
            render={({ onClick }) => (
              <button style={{ display: 'none' }} onClick={onClick} ref={googleButtonRef}>
                Log in with Google
              </button>
            )}
          />
        </div>

        <div className="inputbox1">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="inputbox2">
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
        <div className="inputbox3">
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
        <div className="inputbox4">
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
