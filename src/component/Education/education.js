import React from "react";
import './education.css';

const Education = () => {
    const tenth = {
        width:"300px",
        height:"300px"
    }

return (
    
    <section id="educations" className="education-wrapper">
    <div className="education-title">
        <h2>Education!!</h2>
    </div>
    <div className="education-list">

    <div className="education-container">

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="/assets/btech.jpg" alt="Avatar" style={tenth}/>
                </div>
                <div className="flip-card-back">
                    <h1>Nishant Kumar</h1>
                    <p>B.Tech : 2010-2014</p>
                    <p><i class="fas fa-university" aria-hidden="true"></i> IIEST</p>
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Kolkata, West Bengal</p>
                    <p><i class="fas fa-award" aria-hidden="true"></i> 78%</p>
                </div>
            </div>
        </div>
    </div>

        <div className="education-container">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="/assets/twelth.jpeg" alt="Avatar" style={tenth}/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Nishant Kumar</h1>
                        <p>AISSCE- 2009</p>
                        <p><i class="fas fa-university" aria-hidden="true"></i> Rose Public School</p>
                        <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Darbhanga, Bihar</p>
                        <p><i class="fas fa-award" aria-hidden="true"></i> 83%</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="education-container">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="/assets/tenths.jpeg" alt="Avatar" style={tenth}/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Nishant Kumar</h1>
                        <p>AISSE- 2007</p>
                        <p><i class="fas fa-university" aria-hidden="true"></i> Rose Public School</p>
                        <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Darbhanga, Bihar</p>
                        <p><i class="fas fa-award" aria-hidden="true"></i> 82%</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        
        
    </div>
    <div className="curve-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#30475e' fillOpacity="1" d="M0,192L60,160C120,200,400,44,360,58.7C480,53,300,107,720,128C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
</section>
)

}
export default Education;