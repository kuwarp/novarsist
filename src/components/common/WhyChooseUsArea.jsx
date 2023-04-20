import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import ProgressBar from "@ramonak/react-progress-bar";

function WhyChooseUsArea(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="why-choose-us sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className={`title ${props.black}`}>
                <span>Why Novarsis Tech</span>
                <h2 className="mb-15">
                  success is just around the next online corner
                </h2>
              </div>
              
              {/* <div className="video-demo">
                <img
                  src={process.env.PUBLIC_URL + "/images/play-video.jpg"}
                  alt="images"
                />
                <div className="play-btn">
                  <div onClick={() => setOpen(true)} className="popup-video">
                    <i className="fas fa-play" /> Play now
                  </div>
                </div>
              </div> */}
            </div>
            
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className={`valuable-skills ${props.light}`}>
                <img
                  src={process.env.PUBLIC_URL + "/images/valuable-skill.jpg"}
                  alt="images"
                />
                <div className="signle-bar pt-0">
                  <h6>Web Design</h6>
                  <p>
                  We're just human, we love convenience more than anything, and nothing is more helpful than having everything accessible in a few clicks, as anyone with a website does.
                  </p>
                  {/* <ProgressBar
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={85}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                    labelClassName={`${props.lable}`}
                  /> */}
                </div>
                <div className="signle-bar">
                  <h6>App Development</h6>
                  <p>
                  We use modern technologies to develop mobile applications on various platforms. Our web and mobile app developers have expertise in providing the following mobile app development services
                  </p>
                  {/* <ProgressBar
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={75}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                    labelClassName={`${props.lable}`}
                  /> */}
                </div>
                <div className="signle-bar">
                  <h6>Dedicated Sources</h6>
                  <p>
                  You can prove your success by hiring professional web developers and mobile app developers to synchronize and improve the business process of cutting-edge outputs. We offer the widest range of services from our manufacturers.
                  </p>
                  {/* <ProgressBar
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={55}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                    labelClassName={`${props.lable}`}
                  /> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default WhyChooseUsArea;
