import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

function AboutArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const Singlepercentage = 85;
  const singleXmPercentage = 68;
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left">
                <div className="title black">
                  <span>About us</span>
                  <h2 className="mb-15">Preparing For Your Success</h2>
                </div>
                <p>
                We specialize in providing innovative solutions using the latest technology. We believe in the foundation of good communication for every business.
                </p>
                <div className="our-mission">
                  <div className="msn-icon">
                    <i>
                    <div className="cto">
                    <img
                      src={process.env.PUBLIC_URL + "/images/home.png"}
                      alt="imgs"
                    />
                  </div>
                    </i>
                  </div>
                  <div className="msn-content">
                    <h5>Our Mission</h5>
                    <p>
                    We understand that every business needs different IT solutions and strategies, so we strive to provide the right solutions for your business needs.



Our team of IT professionals has experience in providing solutions for small and medium businesses. We specialize in providing quality service at affordable prices.
                    </p>
                  </div>
                
                </div>
                <div className="cmn-btn">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/about`}>About more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="group-images">
                  {/* <img
                    src={process.env.PUBLIC_URL + "/images/about-bottom.jpg"}
                    alt="images"
                  />
                  <div className="about-top">
                    <img
                      src={process.env.PUBLIC_URL + "/images/about-top.png"}
                      alt="images"
                    />
                  </div> */}
                  <div className="about-skills w-lg-auto">
                    <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>web</h6>
                      
                      </div>
                    </div>

                    <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>E-commerce</h6>
                        
                      </div>
                    </div>


                    {/* <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>web</h6>
                       
                      </div>
                    </div> */}

                    <div className="signle-skill xsm">
                      <CircularProgressbar
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>App</h6>
                       
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-count">
            <div className="row">
              <div className=" col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-1.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={340} delay={2} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Project Completed</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-2.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={90} delay={1} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-3.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={100} delay={3} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Expert Teams</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count xsm">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-4.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={100} delay={4} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Win Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
     
    
    </>
  );
}

export default AboutArea;
