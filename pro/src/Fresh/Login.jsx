import React, { useState } from "react";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import "./Login.css";
import axios from 'axios';

const Login = ({ toggleForm, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Candidate");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = role === "Recruiter" ? 'http://localhost:8080/recruiters' : 'http://localhost:8080/candidates';
      const response = await axios.get(url);
      const users = response.data;

      const user = users.find(user => user.email === email && user.password === password && user.username === username);
      if (user) {
        alert("Login successful");
        onLoginSuccess({ username, role });
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("Error during login. Please try again.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="outer">
      <div className="Loginbox1">
        <button className="close-button" onClick={() => toggleForm(null)}>
          &#10006;
        </button>
        <div className="loginh1">
          <h1>Login Here</h1>
        </div>
        <div className="logsign">
          <p>Login as </p>
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
      
        <div className="line"></div>
        <div className="inputbox1">
          <label>Username</label>
          <input
            type="text"
            placeholder="Your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
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
