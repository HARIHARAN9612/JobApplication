import React, { useState } from "react";
import "./Land.css";
import image from "./Assests/home3.svg";
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
import LoginForm from "./Login";

function Land() {


  return (
    <>
     
      <div className="desktopnav">
        <h1 className="logo">JobHive</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>FindJobs</li>
          <li>Companies</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
        <button className="hire">Hire a job</button>
        <button className="navbt">Login</button>
        <button className="navbt">Signup</button>
      </div>
         
      <div className="Home">
        <div className="Hometext">
          <h1>
            Discover Your <br /> Dream job With
            <br /> <span className="logo1">JobHive</span>
          </h1>
          <p>
            Discover top opportunities with JobHive,
            <br />
            Connect with leading employers and <br /> take the next step in your
            career today.
          </p>
          <button>Apply</button>
          <button className="hire">Hire a Talent</button>
        </div>
        <div className="pict">
          <img className="pic" src={image} alt="JobHive" />
        </div>
      </div>

      <div className="steps">
        <div>
          <img className="stepicon" src={usericon1} alt="Register" style={{ color: 'white', width: '50px' }} />
          <p><span>Register Your Account</span></p>
        </div>
        <div>
          <img className="stepicon" src={usericon2} alt="Upload Resume" style={{ color: 'white', width: '50px' }} />
          <p><span>Upload Your Resume</span></p>
        </div>
        <div>
          <img className="stepicon" src={usericon3} alt="Apply Job" style={{ color: 'white', width: '50px' }} />
          <p><span>Apply for a Job</span></p>
        </div>
      </div>

      <div className="jobcat">
        <div className="jobcat1">
          <h1><span className="joblogo">Job Category</span> <br /> Choose Your Desired Category</h1>
        </div>
        <div className="jobc">
          <div className="jobc1">
            <div>
              <img className="jobsicon" src={j1} alt="Technical Support" style={{ color: 'white', width: '50px' }} />
              <h2>Technical <br />Support</h2>
            </div>
            <div>
              <img className="jobsicon" src={j2} alt="Business Development" style={{ color: 'white', width: '50px' }} />
              <h2>Business<br /> Development</h2>
            </div>
            <div>
              <img className="jobsicon" src={j3} alt="Real Estate" style={{ color: 'white', width: '50px' }} />
              <h2>Real Estate</h2>
            </div>
            <div>
              <img className="jobsicon" src={j4} alt="Finance & Banking" style={{ color: 'white', width: '50px' }} />
              <h2>Finance & Banking <br /> Service</h2>
            </div>
          </div>
          <div className="jobc2">
            <div>
              <img className="jobsicon" src={j5} alt="IT & Networking" style={{ color: 'white', width: '50px' }} />
              <h2>IT & Networking <br /> Services</h2>
            </div>
            <div>
              <img className="jobsicon" src={j6} alt="Restaurant Services" style={{ color: 'white', width: '50px' }} />
              <h2>Restaurant<br /> Services</h2>
            </div>
            <div>
              <img className="jobsicon" src={j7} alt="Share Market Analysis" style={{ color: 'white', width: '50px' }} />
              <h2>Share Market<br /> Analysis</h2>
            </div>
            <div>
              <img className="jobsicon" src={j8} alt="Defence & Fire Service" style={{ color: 'white', width: '50px' }} />
              <h2>Defence & Fire <br /> Service</h2>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default Land;
