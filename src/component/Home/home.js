import React from "react";
import './home.css';

const Home = () => {
    var months;
    function monthDiff(dateFrom, dateTo) {
        return dateTo.getMonth() - dateFrom.getMonth() + 
          (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
       };
       months = monthDiff(new Date(2015, 2), new Date());
       months2years(months);
       function months2years(months) {
        var dur1 = Math.floor(months/12)
        var dur2 = (months/12)-dur1
        var dur3 = Math.floor(dur2*12)
        return dur1+" years and "+dur3+" months"
        } 
        
        
    return (


        <section id="home" className="home-wrapper">
            <div className="image"><img className="backimage" src="/assets/background.png" ></img></div>
            <div className="bio-info">
            <div className="bio-image">
                <img className="bioimage" src="/assets/profile4.jpeg" alt="bim"></img>
                {/* <img className="barcode" src="/assets/barcode.gif" ></img> */}
                </div>
                <div className="name">
                    NISHANT KUMAR
                </div>
                <div className="designation">
                    Web Front-End Developer
                </div>
                <div className="organization">
                    @IBM Labs
                </div>
                {/* <div className="exp">
                    Having {dur1}
                </div> */}
                <div className="socials">
                    <div className="social-link">
                        <a href="https://www.linkedin.com/in/nishant-kumar-0679319b/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                            Linkedin
                        </a>
                    </div>
                    <div className="social-link">
                        <a class="textColor" href="https://github.com/nishant-prog" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                            Github
                        </a>
                    </div>
                    <div className="social-link">
                        <a class="textColor" href="https://stackoverflow.com/users/3384616/nishant-kumar?tab=profile" target="_blank" rel="noreferrer">
                        <i class="fab fa-stack-overflow"></i>
                           stackoverflow
                        </a>
                    </div>
                    <div className="social-link">
                        <a class="textColor" href="https://www.quora.com/profile/Nishant-Kumar-151" target="_blank" rel="noreferrer">
                        <i class="fab fa-quora"></i>
                           Quora
                        </a>
                    </div>
                    <div className="social-link">
                        <a class="textColor" href="https://twitter.com/xxxnishantxxx" target="_blank">
                        <i class="fab fa-twitter"></i>
                           Twitter
                        </a>
                    </div>
                    <div className="">
                    <img className="barcode" src="/assets/barcode.gif" ></img>
                    </div>
                    
                </div>
                

            </div>
            
        </section>

    )
}
export default Home;