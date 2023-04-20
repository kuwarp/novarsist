import React from "react";

import { Link } from "react-router-dom";
function ServiceArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="service-area sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="title">
                <span>Our Services</span>
                <h2>we work performed for client happy.</h2>
                <p> Services never be limited it can be updated on broad areas</p>
                <div className="cmn-btn ">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service`}
                  >
                    view all services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="row g-4">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    {/* <span className="count">01</span> */}
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>web design</h4>
                      {/* <p>
                        Fusce ornare mauris nisi, id fringilla turpis vehicula
                        justo lectus, ultricies nec sem
                      </p> */}
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    {/* <span className="count">02</span> */}
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-2.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>App design</h4>
                      {/* <p>
                        Maecenas ut est in ante imperdiet laoreet eu quis elit
                        laoreet Phasellus Door
                      </p> */}
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    {/* <span className="count">03</span> */}
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-3.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>E-commerce Development</h4>
                      {/* <p>
                        Etiam eu ullamcorper ipsum. Pellentesque eu ipsum luctus
                        libero euismod
                      </p> */}
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    {/* <span className="count">04</span> */}
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-4.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>CMS Development</h4>
                     
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container gtco-features" >
    <div className="container">
        <div className="row">
        <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="title">
                <span>Our Services</span>
                <h2>we work performed for client happy.</h2>
                <p> Services never be limited it can be updated on broad areas</p>
                <div className="cmn-btn ">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service`}
                  >
                    view all services
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
                <h2> Explore The Services<br/>
                    We Offer For You </h2>
                <p> Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla, cursus
                    impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac, dictum id
                    neque. </p>
                <a href="#">All Services <i className="fa fa-angle-right" aria-hidden="true"></i></a></div> */}
            <div className="col-lg-8">
                <svg id="bg-services"
                  
                     viewBox="0 0 1000 800">
                    <defs>
                        <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                            <stop offset="0%" stop-color="rgb(1,230,232)" stop-opacity="25"/>
                            <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1"/>
                        </linearGradient>
                    </defs>
                    <path fill-rule="evenodd" opacity="0.102" fill="url(#PSgrad_02)"
                          d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"/>
                </svg>
                <div className="row">
                    <div className="col">
                        <div className="card text-center">
                            {/* <div className="oval"><img className="card-img-top" src="images/web-design.png" alt=""/></div> */}
                            <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                            <div className="card-body">
                                <h3 className="card-title">Web Design</h3>
                                <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                    eget.</p>
                            </div>
                        </div>
                        <div className="card text-center">
                        <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>  <div className="card-body">
                                <h3 className="card-title">Marketing</h3>
                                <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                    eget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center">
                        <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div> <div className="card-body">
                                <h3 className="card-title">SEO</h3>
                                <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                    eget.</p>
                            </div>
                        </div>
                        <div className="card text-center">
                        <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>  <div className="card-body">
                                <h3 className="card-title">Graphics Design</h3>
                                <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                    eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default ServiceArea;
