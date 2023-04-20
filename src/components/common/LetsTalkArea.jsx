import React from "react";
import { Link } from "react-router-dom";

function LetsTalkArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="lets-talk mt-4 sec-pad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 col-lg-8 col-xl-7">
              <div className="title special">
                <span>Let’s Talk</span>
                <h2>
                  About Your Next <br />
                  <b>Project</b> Your Mind
                </h2>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-5 text-end">
              <div className="getin-touch">
                <div className="cmn-btn">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/contact`}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LetsTalkArea;
