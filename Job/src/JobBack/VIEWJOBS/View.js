import "./View.css";
import AdobeLogo from "../images/Adobe.png";
import FlipkartLogo from "../images/Flipkart.png";
import GoogleLogo from "../images/Google.png";
import MicrosoftLogo from "../images/Microsoft.png";
import PepsiLogo from "../images/pepsi.png";
import React, { useEffect, useState } from "react";
import SalesforceLogo from "../images/Salesforce.png";
import UberLogo from "../images/Uber.png";
import ZohoLogo from "../images/Zoho.png";
import axios from "axios";
import eBayLogo from "../images/ebay.png";

const logoMap = {
  Adobe: AdobeLogo,
  Flipkart: FlipkartLogo,
  Google: GoogleLogo,
  Microsoft: MicrosoftLogo,
  Salesforce: SalesforceLogo,
  Uber: UberLogo,
  Zoho: ZohoLogo,
  eBay: eBayLogo,
  Pepsi: PepsiLogo,
};

const View = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/jobsdata');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div className="left">
            <img
              src={logoMap[job.companyName] || GoogleLogo} // Default to GoogleLogo if not found
              alt={`${job.companyName} logo`}
              className="company-logo"
            />
          </div>
          <div className="right">
            <div className="top">
              <h3>{job.jobTitle}</h3>
              <button className="apply-button">Apply</button>
            </div>
            <div className="bottom">
              <p><i className="icon-location"></i> {job.location}</p>
              <p><i className="icon-salary"></i> {job.salary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
