  import React from "react";
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

  function Land({ toggleForm }) {
    return (
      <>
        <div className="Landtop">
          <div className="desktopnav">
            <h1 className="logo">JobHive</h1>

            <ul className="nav-links">
              <li className="link">
                <Link to="/">Home</Link>
              </li>
            
              <li className="link">
                <Link to="/anotherpage">findjobs</Link>
              </li>
              <li className="link">
                <Link to="/About">About</Link>
              </li>
              <li className="link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <button  className="hire" onClick={() => toggleForm("login")}>
              Hire a Talent
            </button>
            <button className="navbt1" onClick={() => toggleForm("login")}>
              Login
            </button>
            <button className="navbt" onClick={() => toggleForm("signup")}>
              Signup
            </button>
          </div>
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

        <div className="Contacth">
          <h1>Contact Us</h1>
          <div className="line"></div>
          <p>
            Digital platform that connects employers with job seekers, <br />{" "}
            providing a space for posting job listings and applying for positions,
            To get a Dream job
          </p>
        </div>

        <div className="contact">
          <div className="contactf">
            <div className="contactl">
              <div className="Ns">
                <input className="l1" placeholder="Your Name" type="text"></input>
                <input
                  className="l1"
                  placeholder="Your Subject"
                  type="text"
                ></input>
              </div>
              <div className="Ep">
                <input
                  className="l1"
                  placeholder="Your Email"
                  type="text"
                ></input>
                <input
                  className="l1"
                  placeholder="Your Phone"
                  type="text"
                ></input>
              </div>
              <div className="Ms">
                <input
                  className="msg"
                  placeholder="Your Message"
                  type="text"
                ></input>
                <button type="submit">Submit</button>
              </div>
            </div>
            <div className="contactr">
              <div className="det">
                <h2>Contact Information</h2>
                <p className="p1">
                  Contact us to make easier connect
                  <br /> with employers or job seekers.
                </p>
                <div>
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
                <div>
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
                <div>
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
              <div className="contacticon">
                <h2>Follow us on</h2>
                <div className="Conicon">
                  <FaLinkedin
                    id="ic"
                    style={{
                      color: "rgb(24, 126, 204)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <FaFacebook
                    id="ic"
                    style={{
                      color: "rgb(44, 114, 211)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <FaTwitter
                    id="ic"
                    style={{ color: "black", width: "30px", height: "30px" }}
                  />
                  <FaPinterest
                    id="ic"
                    style={{
                      color: " rgb(208, 48, 48)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
    );
  }

  export default Land;
