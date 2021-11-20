import React from "react";
import './experience.css';


const Experience = () => {
    const tenth = {
        width:"200px",
        height:"200px"
    }

    return (
        
    <section id="educations" className="education-wrapper">
    <div className="education-title">
        <h2>Experience !!</h2>
    </div>
    <div className="education-list">

    <div className="education-container">

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="/assets/IBMISL.png" alt="IBM logo" style={tenth}/>
                </div>
                <div className="flip-card-back">
                <p><i class="fas fa-briefcase"></i><span className="experiencel-list">  <strong>IBM ISL</strong></span></p>
                    <p>Retails and E-commerce</p>
                    <p>APPLICATION DEVELOPER</p>
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Bangalore, India</p>
                    <p><i class="fas fa-award" aria-hidden="true"></i> Feb 2015 - Sep 2017</p>
                </div>
            </div>
        </div>
    </div>

        <div className="education-container">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="/assets/Cerner.jpg" alt="cerner logo" style={tenth}/>
                    </div>
                    <div className="flip-card-back">
                    <p><i class="fas fa-briefcase"></i><span className="experiencel-list">  <strong>CERNER HEALTHCARE</strong></span></p>
                    <p>Healthcare Sector</p>
                    <p>SENIOR SOFTWARE ENGINEER</p>
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Bangalore, India</p>
                    <p><i class="fas fa-award" aria-hidden="true"></i> Sep 2017 - Apr-2018</p>
                </div>
                </div>
            </div>
            
        </div>
        <div className="education-container">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="/assets/Honeywell.jpg" alt="honeywell logo" style={tenth}/>
                    </div>
                    <div className="flip-card-back">
                    <p><i class="fas fa-briefcase"></i><span className="experiencel-list">  <strong>HONEYWELL </strong></span></p>
                    <p>Petrochemical Domain</p>
                    <p>APPLICATION DEVELOPMENT SENIOR ANALYST</p>
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Bangalore, India</p>
                    <p><i class="fas fa-award" aria-hidden="true"></i> Apr 2018 - Aug 2018</p>
                </div>
                </div>
            </div>
            
        </div>
        <div className="education-container">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="/assets/Accenture.jpg" alt="Accenture logo" style={tenth}/>
                    </div>
                    <div className="flip-card-back">
                    <p><i class="fas fa-briefcase"></i><span className="experiencel-list">  <strong>ACCENTURE SOLUTION</strong></span></p>
                    <p>Insurance Domain</p>
                    <p>APPLICATION DEVELOPMENT SENIOR ANALYST</p>
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Bangalore, India</p>
                    <p><i class="fas fa-award" aria-hidden="true"></i> Aug 2018 - Jan 2021</p>
                </div>
                </div>
            </div>
            </div>
        <div className="education-container">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="/assets/IBM.jpg" alt="IBM logo" style={tenth}/>
                    </div>
                    <div className="flip-card-back">
                    <p><i class="fas fa-briefcase"></i><span className="experiencel-list">  <strong>IBM LABS</strong></span></p>
                    <p>Finance and Operations</p>
                    <p>SOFTWARE DEVELOPMENT ENGINEER</p>
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Bangalore, India</p>
                    <p><i class="fas fa-award" aria-hidden="true"></i> Feb 2021 - Present</p>
                </div>
                </div>
            </div>
            </div>
        
        
        
    </div>
    <div className="curve-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#30475e' fillOpacity="1" d="M0,192L60,160C120,128,240,64,360,58.7C480,53,600,107,720,128C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
</section>

    )

}
export default Experience;