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
import Contact from "./Contact";
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaHome, FaGoogle, FaUser, FaBoxes, FaSearch, FaHSquare, FaPhone, FaIndustry } from "react-icons/fa";

const Land = () => {
  const [user, setUser] = useState({ loggedIn: false, email: "" });

  const toggleForm = (formType) => {

    console.log(`Toggling form: ${formType}`);
  };

  const handleLogout = () => {
  
    setUser({ loggedIn: false, email: "" });
  };

  return (
    <>
        <div className="Home">
          <div className="Hometext">
            <h1>
              Discover Your <br /> Dream job With <br />{" "}
              <span className="logo1">JobHive</span>
            </h1>
            <p>
              Discover top opportunities with JobHive,
              <br /> Connect with leading employers and <br /> take the next
              step in your career today.
            </p>
            <button className="apply1" onClick={() => toggleForm("login")}>
              Apply
            </button>
            <button className="hire1" onClick={() => toggleForm("login")}>
              Hire a Talent
            </button>
          </div>
          <div className="pict">
            <img className="pic" src={image} alt="JobHive" />
          </div>
        </div>
       
          <div className="steps">
            <div>
              <img className="stepicon" src={usericon1} alt="Register" />
              <p>
                <span>Register Your Account</span>
              </p>
            </div>
            <div>
              <img className="stepicon" src={usericon2} alt="Upload Resume" />
              <p>
                <span>Upload Your Resume</span>
              </p>
            </div>
            <div>
              <img className="stepicon" src={usericon3} alt="Apply Job" />
              <p>
                <span>Apply for a Job</span>
              </p>
            </div>
          </div>
          <div className="jobcat">
            <div className="jobcat1">
              <h1>
                <span className="joblogo">Job Category</span> <br /> Choose Your
                Desired Category
              </h1>
            </div>
            <div className="jobc">
              <div className="jobc1">
                <div>
                  <img className="jobsicon" src={j1} alt="Technical Support" />
                  <h2>
                    Technical <br />
                    Support
                  </h2>
                </div>
                <div>
                  <img className="jobsicon" src={j2} alt="Business Development" />
                  <h2>
                    Business
                    <br /> Development
                  </h2>
                </div>
                <div>
                  <img className="jobsicon" src={j3} alt="Real Estate" />
                  <h2>Real Estate</h2>
                </div>
                <div>
                  <img className="jobsicon" src={j4} alt="Finance & Banking" />
                  <h2>
                    Finance & Banking <br /> Service
                  </h2>
                </div>
              </div>
              <div className="jobc2">
                <div>
                  <img className="jobsicon" src={j5} alt="IT & Networking" />
                  <h2>
                    IT & Networking <br /> Services
                  </h2>
                </div>
                <div>
                  <img className="jobsicon" src={j6} alt="Restaurant Services" />
                  <h2>
                    Restaurant
                    <br /> Services
                  </h2>
                </div>
                <div>
                  <img
                    className="jobsicon"
                    src={j7}
                    alt="Share Market Analysis"
                  />
                  <h2>
                    Share Market
                    <br /> Analysis
                  </h2>
                </div>
                <div>
                  <img
                    className="jobsicon"
                    src={j8}
                    alt="Defence & Fire Service"
                  />
                  <h2>
                    Defence & Fire <br /> Service
                  </h2>
                </div>
              </div>
            </div>
          </div>
       

        <div className="Abouttop">
          <h1>About Us</h1>
          <div className="line"></div>
          <p>
            Digital platform that connects employers with job seekers, <br />{" "}
            providing a space for posting job listings and applying for positions,
            To get a Dream job
          </p>
        </div>
        <div className="About">
        <div className="Aimage">
        <img className="AMan" src={man} alt="Land" />
        </div>
        <div className="Aright">
        <h1>
          Helps You to Get the <br/> Best Job That fits You
        </h1>
        <p>
            Digital platform that connects employers with job seekers, <br />{" "}
            providing a space for posting job listings and applying for positions,
            To get a Dream job
          </p>
          <div className="ico">
          <FaBoxes
                        id="ic"
                        style={{color:'white', width: "40px", height: "40px", margin: "18px",backgroundColor:'blue',padding:'10px',borderRadius:'10px'}}
                      />  <p> <span style={{fontSize:'24px',fontWeight:'600'}}>#1 Job site in Country </span><br/>
            Digital platform that connects employers with job seekers, <br />{" "}
            providing a space for posting job listings  To get a Dream job
          </p>
          </div>
          <div className="ico">
          <FaSearch
                        id="ic"
                        style={{color:'white', width: "40px", height: "40px", margin: "18px",backgroundColor:'blue',padding:'10px',borderRadius:'10px'}}
                      />  <p> <span style={{fontSize:'24px',fontWeight:'600'}}>Seamless Search </span><br/>
            Digital platform that connects employers with job seekers, <br />{" "}
            providing a space for posting job listings  To get a Dream job
          </p>
          </div>
          <div className="ico">
          <FaIndustry                      id="ic"
                        style={{color:'white', width: "40px", height: "40px", margin: "18px",backgroundColor:'blue',padding:'10px',borderRadius:'10px'}}
                      />  <p> <span style={{fontSize:'24px',fontWeight:'600'}}>Hired in Top Companies </span><br/>
            Digital platform that connects employers with job seekers, <br />{" "}
            providing a space for posting job listings  To get a Dream job
          </p>
          </div>
        </div>
    
        </div>

       <div ></div>
      </>
    );
  }

  export default Land;
