import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Land.css";
import image from "./Assests/home3.svg";
import boy from "./Assests/boy.png";
import usericon1 from "./Assests/Icons/user icon.svg";
import usericon2 from "./Assests/resumeicon.svg";
import usericon3 from "./Assests/Icons/job.svg";
import j1 from "./Assests/Icons/tech.svg";
import j2 from "./Assests/Icons/business.svg";
import j3 from "./Assests/Icons/j3.svg";
import j4 from "./Assests/Icons/j4.svg";
import j5 from "./Assests/Icons/j5.svg";
import j6 from "./Assests/Icons/j6.svg";
import j7 from "./Assests/Icons/j7.svg";
import j8 from "./Assests/Icons/j8.svg";
import man from "./Assests/leftman.png";
import Login from "./Login";
import Signup from "./Signup"; // Import Signup component

import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaHome,
  FaGoogle,
  FaUser,
  FaBoxes,
  FaSearch,
  FaHSquare,
  FaPhone,
  FaIndustry
} from "react-icons/fa";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'candidate' or 'recruiter'
  const [username, setUsername] = useState("");
  const [formType, setFormType] = useState(null); // 'login' or 'signup'

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserRole(user.role);
    setUsername(user.username);
    setFormType(null); // Close the form
  };

  const toggleForm = (type) => {
    setFormType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setUsername("");
  };

  const getNavClass = () => {
    if (isLoggedIn) {
      return userRole === 'candidate' ? 'desktopnav' : 'altnav';
    }
    return 'desktopnav';
  };

  return (
    <>
      <div className="Landtop">
        {formType === 'login' && (
          <Login toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} />
        )}

        {formType === 'signup' && (
          <Signup toggleForm={toggleForm} />
        )}

        {getNavClass() === 'desktopnav' && (
          <div className="desktopnav">
            <h1 className="logo">JobHive</h1>
            <ul className="nav-links">
              <li className="link">
                <Link to="/">Home</Link>
              </li>
              <li className="link">
                <Link to="/browse">Find_Jobs</Link>
              </li>
              <li className="link">
                <Link to="/About">About</Link>
              </li>
              <li className="link">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link">
                <Link to="/post">post</Link>
              </li>
            </ul>
            <button className="hire" onClick={() => toggleForm("login")}>
              Hire a Talent
            </button>
            {!isLoggedIn && (
              <>
                <button className="navbt1" onClick={() => toggleForm("login")}>
                  Login
                </button>
                <button className="navbt" onClick={() => toggleForm("signup")}>
                  Signup
                </button>
              </>
            )}
          </div>
        )}

        {getNavClass() === 'altnav' && (
          <div className="altnav">
            <h1 className="logo">JobHive</h1>
            <ul className="alt-links">
              <li className="link">
                <Link to="/">Home</Link>
              </li>
              <li className="link">
                <Link to="/browse">FindJobs</Link>
              </li>
            
             
              <li className="link">
                <Link to="/post">Post</Link>
              </li>
              <li className="link">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link">
                <Link to="/About">About</Link>
              </li>
            </ul>
            <div className="user-info">
            <span>logged_in_as</span>
              <FaUser style={{ height: '50px', color: "black" }} />
              
              <span >{username}</span>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>{/* Rest of the Land component content */}
    </>
  );
};

export default Nav;
