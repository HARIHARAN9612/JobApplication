import React from "react";
import "./Land.css";
import { Link } from "react-router-dom";

import man from "./Assests/leftman.png";

import {
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaHome,
    FaGoogle,
    FaBoxes,FaStock,
    FaPhone,FaSearch,
    FaHSquare,
    FaIndustry
  } from "react-icons/fa";
  

function About()
{
    return(
        <> <div className="Abouttop">
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
   
      </div>      <div className="Footer">
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
      <div className="footerbottom"></div></>
    )
}
export default About;