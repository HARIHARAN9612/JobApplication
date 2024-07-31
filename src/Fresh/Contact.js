import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Land.css";
import {
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaHome,
    FaGoogle,
    FaPhone
} from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_hgausns', 'template_dx6k87o', e.target, 'Xq5bPCnvBAX4I6cLG')
          .then((result) => {
              alert('Message sent successfully!');
              setFormData({
                  name: '',
                  subject: '',
                  email: '',
                  phone: '',
                  message: ''
              });
          }, (error) => {
              console.error('Message sending failed:', error.text);  // Log the error message
              alert('Message sending failed.');
          });
  };
  

    return (
        <>
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
                    <form onSubmit={handleSubmit}>
                        <div className="contactl">
                            <div className="Ns">
                                <input
                                    className="l1"
                                    name="name"
                                    placeholder="Your Name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="l1"
                                    name="subject"
                                    placeholder="Your Subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="Ep">
                                <input
                                    className="l1"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="l1"
                                    name="phone"
                                    placeholder="Your Phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="Ms">
                                <textarea
                                    className="msg"
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                    <div className="contactr">
                        <div className="det">
                            <h2>Contact Information</h2>
                            <p className="p1">
                                Contact us to make easier connect
                                <br /> with employers or job seekers.
                            </p>
                            <div>
                                <p>
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
                                <p>
                                    <span>
                                        <FaGoogle
                                            id="ic"
                                            style={{ width: "20px", height: "20px", margin: "-3px" }}
                                        />{" "}
                                    </span>
                                    Email: Jobhive@gmail.com
                                </p>
                            </div>
                            <div>
                                <p>
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
                            <p>
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
                            <p>
                                <span>
                                    <FaGoogle
                                        id="ic"
                                        style={{ width: "20px", height: "20px", margin: "-3px" }}
                                    />{" "}
                                </span>
                                Email: Jobhive@gmail.com
                            </p>
                        </div>
                        <div className="ff">
                            <p>
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

export default Contact;
