import React from "react";
import './about.css';

const renderSeparator = () => (
    <div className="separator-container">
        <div className="separator"></div>
    </div>
);
const renderAboutSideBar = () => (
    <div className="about-side-wrapper">
        <div className="about-contact">
            <div className="info-container">
                <p><i className="fas fa-envelope"></i>  nishantkumar967@gmail.com</p>
            </div>
            <div className="info-container">
                <p><i className="fas fa-phone"></i>  +91 8139928884</p>
            </div>
            <div className="info-container">
                <p><i className="fas fa-map-marker-alt"></i>  Bangalore, India</p>
            </div>
        </div>
        <div className="about-education">
            <div className="about-title">Education</div>
            <div className="about-description">
                <b>BACHELOR OF TECHNOLOGY</b><br/>
                <div className="title-secondary">
                    <p>COMPUTER SCIENCE AND ENGINEERING</p>
                </div>
                IIEST SHIBPUR, KOLKATA, INDIA
            </div>
        </div>
        <div className="about-hobbies">
      <div className="about-title">Hobbies</div>
      <div className="about-description">
        Travelling
      </div>
      <div className="about-description">
        Coding
      </div>
      <div className="about-description">
        Driving
      </div>
    </div>
    <div className="about-summary">
      <div className="about-title">Summary</div>
      <div className="about-description">
        A passionate developer, philomath, having 6.2+ years of experience
        in multiple Web Technologies and fostering relationships with clients,
        partners & team members. Proficient with front-end web development,
        learner of backend web-technologies, aspiring to be a proficient
        full-stack web development.
      </div>
    </div>
    </div>
);
const renderAboutMain = () => (
    <div className="about-main-wrapper">
        <div className="about-work-experience">
            <div className="about-title">Work Experience</div>
            <div className="experience-details">
                <div className="job-designation">Software Development Engineer</div>
                <div className="organisation-name">IBM - Labs</div>
                <div className="job-duration"><i>Feb, 2021 - Present</i></div>
                <div className="work-descriptions">
                    <ul>
                    <li><i class="fas fa-star-of-life fa-xs"></i> Added a standard component library to be utilized across multiple applications</li>
                    <li><i class="fas fa-star-of-life fa-xs"></i> Worked on feature upgradation, analyzed the outdated technology and migrated the application with the latest one</li>
                    <li><i class="fas fa-star-of-life fa-xs"></i> Added features which enhanced SEO by 20%</li>
                    <li><i class="fas fa-star-of-life fa-xs"></i> Working with multiple web-technologies to enhance the existing applications</li>
                    <li><i class="fas fa-star-of-life fa-xs"></i> Working on adding new features that targets a large audience to use our product(s)</li>
                    </ul>
                </div>
            </div>
            {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">Application Development Senior Analyst</div>
        <div className="organisation-name">Accenture Solution Pvt. Ltd.</div>
        <div className="job-duration"><i>Aug-2018 to Jan-2021</i></div>
        <div className="work-descriptions">
          <ul>
            <li><i class="fas fa-star-of-life fa-xs"></i> Worked as Frontend Engineer in financial domain, developing multiple projects following AGILE process of project development.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Won sprint awards for Individual Excellence and Best Team.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Developed UI for Hartford Single Front  Door Application using Angular 6 & 7 ,Typescript , HTML5, CSS3, Bootstrap, Javascript . </li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Ensure design consistency with client’s development standards and guidelines.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Coordinated with the team to analyze and develop the business requirements.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Worked closely with the backend team to integrate the services with the front-end.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Worked closely with the BAs to understand the business requirements and gave required inputs.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Build reusable code including angular custom component and libraries for future use using Typescript.</li>
            
          </ul>
        </div>
      </div>
      {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">Application Development Senior Analyst</div>
        <div className="organisation-name">Honeywell International</div>
        <div className="job-duration"><i>April-2018 to Aug-2018</i></div>
        <div className="work-descriptions">
          <ul>
            <li><i class="fas fa-star-of-life fa-xs"></i> Developed KPI dashboard for different Honeywell client  .</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Optimized application for maximum speed and scalability.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Written testcases for smoke testing of browser extension using Selenium JS and Mocha.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Using GIT for daily check-in and check-out of the code for version control.</li>
          </ul>
        </div>
      </div>
      {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">Senior Software Engineer</div>
        <div className="organisation-name">Cerner Healthcare</div>
        <div className="job-duration"><i>Sep-2017 to April-2018</i></div>
        <div className="work-descriptions">
          <ul>
            <li><i class="fas fa-star-of-life fa-xs"></i> Developed KPI dashboard using HTML5, CSS, Bootstrap and JavaScript native API’s .</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Created Web application front end as per design wireframe and information architecture.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Integrated front-end application with the JIRA 3 Database.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Followed the best practices and standards for accessibility and cross-browser compatibility.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Bootstrap used for making the webpage responsive.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Plot Multiple KPI chart using D3.js and Chart.js.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Build reusable code and libraries for future use.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Maintain design consistency with client’s development standards and guidelines.</li>
          </ul>
        </div>
      </div>
      {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">Application Developer</div>
        <div className="organisation-name">IBM - ISL</div>
        <div className="job-duration"><i>Feb-2015 to Sep-2017</i></div>
        <div className="work-descriptions">
          <ul>
            <li><i class="fas fa-star-of-life fa-xs"></i> Internal tool developed to automate the financial process within the account.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> It will automate the PMO’s work and reduce complexity, error and time usage also.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> This tool is used for keeping the records of all the resources under any project.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> Won sprint awards for Going Above and  Beyond for completing exceptional tasks.</li>
            <li><i class="fas fa-star-of-life fa-xs"></i> This tool is also used by different managers in an account to get details of their resources, reportees and any other activities.</li>
          </ul>
        </div>
      </div>
        </div>
    </div>
)

const About = ()=> {
    return (
        <section id="about" className="about-wrapper"> 
            {renderAboutSideBar()}
            {renderAboutMain()}
        </section>
    )
}
export default About;