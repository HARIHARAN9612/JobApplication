import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <img
          src={`/images/${job.companyName}.png`}
          alt="Company Logo"
          className={styles.companyLogo}
        />
        <div className={styles.headingdiv}>
          <h2>{job.jobTitle}</h2>
          <div className={styles.buttons}>
          <div className="submit1">
                        <Link to="/apply" className="applyButton1">Apply</Link>
                    </div>
          </div>
        </div>
      </div>
      <p>{job.jobDescription}</p>
      <div className={styles.jobFooter}>
        <span className={styles.company}>{job.companyName}</span>
        <span className={styles.salary}>
          <i className="fas fa-dollar-sign"></i> {job.salary}
        </span>
        <span className={styles.location}>
          <i className="fas fa-map-marker-alt"></i> {job.location}
        </span>
      </div>
    </div>
    
  );
};

export default Card;
