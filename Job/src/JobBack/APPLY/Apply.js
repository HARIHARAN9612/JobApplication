import "./Apply.css";
import React, { useState } from "react";
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

const Apply = () => {
    
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        experience: '',
        address: '',
        city: '',
        pincode: '',
        date: '',
        cv: null,
    });

    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: type === 'file' ? files[0] : value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault(); 

        
        const { firstName, lastName, email, experience, address, city, pincode, date, cv } = formValues;

        
        if (!firstName || !lastName || !email || !experience || !address || !city || !pincode || !date || !cv) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        
        alert("Form Submitted Successfully");

    
    };

    return (
        <>
        <div className="applymaindiv">
            <div className="applyform">
                <h2>JOB APPLICATION FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formValues.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Last Name*</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formValues.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Experience</label>
                            <input
                                type="text"
                                name="experience"
                                placeholder="Enter in Years"
                                value={formValues.experience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="adddiv">
                        <label>Address</label>
                        <input
                            name="address"
                            rows="4"
                            cols="50"
                            placeholder="Enter your text here"
                            value={formValues.address}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div>
                        <div className="appflexrow">
                            <div className="appflex1">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter City"
                                    value={formValues.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="appflex1">
                                <label>Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="Enter Pincode"
                                    value={formValues.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="appDate">
                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                placeholder=""
                                value={formValues.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="cv">
                            <label>Upload your CV</label>
                            <input
                                type="file"
                                name="cv"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="submitapply">
                        <button type="submit">Apply</button>
                    </div>
                </form>
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
};

export default Apply;
