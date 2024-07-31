
import React, { useState } from "react";
import styles from "./Post.module.css";
import Footer from "../../Fresh/Footer";

const Post = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    jobType: "",
    applicationDeadline: "",
    salaryCurrency: "",
    jobDescription: "",
    companyName: "",
    companyWebsite: "",
    companyIndustry: "",
    facebookPage: "",
    linkedinPage: "",
    twitterPage: "",
    instagramPage: "",
    companyDescription: "",
    logo: null,
    recruiterName: "",
    recruiterEmail: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Fetch existing jobs to determine the next ID
      const existingJobsResponse = await fetch("http://localhost:8081/jobs");
      const existingJobs = await existingJobsResponse.json();
      
      // Determine the next ID (if there are no jobs, start from 1)
      const nextId = existingJobs.length > 0
        ? Math.max(...existingJobs.map(job => parseInt(job.id, 10))) + 1
        : 1;
  
      // Create a new job object with the next ID
      const newJob = { ...formData, id: nextId.toString() };
  
      // Extract main details for the jobsdata endpoint
      const mainDetails = {
        id: nextId.toString(),
        companyName: newJob.companyName,
        jobTitle: newJob.jobTitle,
        salary: newJob.salaryCurrency,
        location: newJob.companyIndustry, // Assuming companyIndustry as location
        jobDescription: newJob.jobDescription
      };
  
      // Post the full job data to the jobs endpoint
      const jobResponse = await fetch("http://localhost:8081/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
  
      // Post the main details to the jobsdata endpoint
      const jobsDataResponse = await fetch("http://localhost:8081/jobsdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mainDetails),
      });
  
      if (jobResponse.ok && jobsDataResponse.ok) {
        alert("Job posted successfully!");
      } else {
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred while posting the job.");
    }
  };
  
  return (
    <>
    <div className="topspace"></div>
    <div>
    
      <div className={styles.postjobmaindiv}>
        <form onSubmit={handleSubmit}>
          <div  style={{height:'185px',backgroundColor:"rgb(44, 114, 211)" }}>
            <h1>Post a job</h1>
            <div className="line" style={{Color:"white"}}></div>
           <p style={{paddingLeft:"50px",color:"white"}}>
          
                    Digital platform that connects employers with job seekers, <br />{" "}
                    providing a space for posting job listings and applying for positions,
                    To get a Dream job
              
           </p>

          </div>

          <div className={styles.postjobjobinfo}>
            <div className={styles.postjobjobinfosub}>
              <h1>Job Information</h1>
              <div className={styles.jobtitle}>
                <label>Job Title*</label>
                <input
                  type="text"
                  className={styles.styled}
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Category*</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="ux-ui-designer">UX/UI Designer</option>
                    <option value="web-developer">Web Developer</option>
                    <option value="web-designer">Web Designer</option>
                    <option value="seo">SEO</option>
                  </select>
                </div>
                <div className={styles.innerflexrow}>
                  <label>Job Types*</label>
                  <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                  >
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="internship">Internship</option>
                    <option value="office">Office</option>
                  </select>
                </div>
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Application Deadline</label>
                  <input
                    type="date"
                    className={styles.styled}
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>Salary Currency</label>
                  <select
                    name="salaryCurrency"
                    value={formData.salaryCurrency}
                    onChange={handleChange}
                    required
                  >
                    <option value="default">Default</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000-30000">20000-30000</option>
                    <option value="30000-40000">30000-40000</option>
                  </select>
                </div>
              </div>
              <div className="formgroup">
                <label htmlFor="jobDescription">Job Description*</label>
                <textarea
                 className="taofjobdes"
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Enter the job description here"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <h1>Company Information</h1>
              <div className={styles.jobtitle}>
                <label>Company name</label>
                <input
                  type="text"
                  className={styles.styled}
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Company Website</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>Company Industry</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="companyIndustry"
                    value={formData.companyIndustry}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Facebook Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="facebookPage"
                    value={formData.facebookPage}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>LinkedIn Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="linkedinPage"
                    value={formData.linkedinPage}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Twitter Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="twitterPage"
                    value={formData.twitterPage}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>Instagram Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="instagramPage"
                    value={formData.instagramPage}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="companyDescription">Company Description*</label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  placeholder="Enter the company description here"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <span>Logo (Optional)</span>
              <span>Select image:</span>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
              />
              <span>Maximum file size: 2 MB</span>
              <div>
                <h1>Recruiter Information</h1>
                <div className={styles.flexrow}>
                  <div className={styles.innerflexrow}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      className={styles.styled}
                      name="recruiterName"
                      value={formData.recruiterName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.innerflexrow}>
                    <label>Email</label>
                    <input
                      type="email"
                      className={styles.styled}
                      name="recruiterEmail"
                      value={formData.recruiterEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className={styles["submit-btn"]}>
                <button type="submit" className={styles["submit-btn"]}>
                  Post A Job
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
 
    
    
    </>
  );
};

export default Post;
