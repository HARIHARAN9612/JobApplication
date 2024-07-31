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
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaHome, FaGoogle, FaUser, FaBoxes, FaSearch, FaHSquare, FaPhone, FaIndustry } from "react-icons/fa";
function Footer()
{
    return(
        <>
        <div className="Footer">
        <div className="foot1">
          <h1 className="logo">JobHive</h1>
          <p>
            Digital platform that connects
            <br /> employers with job seekers, <br /> providing a space for
            employers <br />
            to Hire
          </p>
          <div className="det1">
            <div className="ff">
              {" "}
              <p>
                {" "}
                <span>
                  <FaHome
                    id="ic"
                    style={{ width: "20px", height: "20px", margin: "-3px" }}
                  />{" "}
                </span>
                Address: 555 Wall Street, USA, NY
              </p>
            </div>
            <div className="ff">
              {" "}
              <p>
                {" "}
                <span>
                  <FaGoogle
                    id="ic"
                    style={{ width: "20px", height: "20px", margin: "-3px" }}
                  />{" "}
                </span>
                Email: Jobhive.gmail.com
              </p>
            </div>
            <div className="ff">
              <p>
                {" "}
                <span>
                  <FaPhone
                    id="ic"
                    style={{ width: "20px", height: "20px", margin: "-3px" }}
                  />{" "}
                </span>{" "}
                Phone: 555-555-1234
              </p>
            </div>
          </div>
          <div className="footic">
            <FaLinkedin
              id="ic1"
              style={{
                color: "rgb(24, 126, 204)",
                width: "30px",
                height: "30px",
              }}
            />
            <FaFacebook
              id="ic1"
              style={{
                color: "rgb(44, 114, 211)",
                width: "30px",
                height: "30px",
              }}
            />
            <FaTwitter
              id="ic1"
              style={{ color: "black", width: "30px", height: "30px" }}
            />
            <FaPinterest
              id="ic1"
              style={{
                color: " rgb(208, 48, 48)",
                width: "30px",
                height: "30px",
              }}
            />
          </div>
        </div>
        <div className="foot2">
          <div>
            <p>For Job seekers</p>
            <ul>
              <li>User Dashboard</li>
              <li>CV Packages</li>
              <li>Jobs Featured</li>
              <li>Jobs Urgent</li>
              <li>Candidate List</li>
              <li>Candidates Grid</li>
            </ul>
          </div>
        </div>
        <div className="foot3">
          <div>
            <p>For Employers</p>
            <ul>
              <li>Post New</li>
              <li>Employer List</li>
              <li>Employers Grid</li>
              <li>Job Packages</li>
              <li>Jobs Listing</li>
              <li>Jobs Featured</li>
            </ul>
          </div>
        </div>
        <div className="foot4">
          <div>
            <p className="p1">Join our Newsletter</p>
            <p>
              Subscribe to get the latest jobs posted,
              <br /> candidates...
            </p>
            <input className="l1" placeholder="Your Email" type="text"></input>
          </div>
          <div>
            <button>Subscribe Now!</button>
          </div>
        </div>
      </div>
      <div className="footerbottom"></div>
      </>
    )
}
export default Footer;