import React from 'react'

const Cms = () => {
  return (
    <>
    
    <section className="service-details sec-mar">
       
        <div className="container">
        <div className='  flex-column   col-12'>
        <h1 className=' d-flex justify-content-center text-uppercase text-secondary mb-lg-12 '> Content Management Serevices</h1>
        </div>
          <div className="row">
            <div className="col-md-6 col-lg-12 col-xl-12 or2">
              <div className="signle-service-details">
              <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/icons/service-details-icon.svg"
                    }
                    alt="images"
                  />
                <h3>
                  
                 Boost your Accessibility with Us
                </h3>
               <p>
               Instead of designing and building systems that help create web pages or store images, a CMS can be used to manage  task while team  can focus on your CMS website visitors.

 With

CMS, you can design and build websites without writing code. Simply put, a CMS website is a website built using a content management system.

A CMS not only helps manage the text or images displayed on the website, but also helps to track users' time, conduct research questions, collect feedback and comments, host forums on the website, and more.
Content Management System or CMS is software for creating, managing and editing websites even if you have no special skills or knowledge.

<h5 className='mt-4'>CMS software falls into three broad categories: <br /> <span className='mt-4'> software-based CMS services, including open source,<br/> proprietary,<br/>  and cloud solutions.</span></h5>
               </p>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 col-xl-4 or1">
              <div className="sidebar-search">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="post"
                >
                  <input
                    type="search"
                    name="search"
                    placeholder="Search Here"
                  />
                  <button type="submit">
                    <i className="bi bi-search" />
                  </button>
                </form>
              </div>
              <div className="sidebar-widget">
                <h4>Services</h4>
                <ul className="service-list">
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Web Design <span>(15)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Apps Development <span>(18)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Software Development <span>(21)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Motion Graphics <span>(25)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      UI/UX Design <span>(29)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Graphic Design <span>(31)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="single-service-work-process">
            <h3>Majority of Content Management Services</h3>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>01</span>
                    </div>
                    <h4>Open Source</h4>
                    <p>
                     <ul>
                        <li> Open source software is code created for general use - anyone can view, modify, and distribute the code as they see fit.
</li>
                        <li>  it is often less expensive, more flexible, and longer lasting than proprietary software.</li>
                        <ul> Some Open Source Tools are: <br/>
                        <li className='text-bold'>	✔ Joomla</li>
                        <li>	✔ Wordpress</li>
                        <li>	✔ Magento</li>
                        <li>	✔ Preshtshop</li>
                        
                        </ul>
                     </ul>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/step-1.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-step">
              <div className="row">
                <div className="col-md-4 col-xl-4">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/step-2.jpg"}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="col-md-8 col-xl-8">
                  <div className="step">
                    <div className="step-count">
                      <span>02</span>
                    </div>
                    <h4>Developing</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      Vestibulum tempor tristique neque non pretium. Etiam leo
                      risus, consectetur sagittis ullamcorper scelerisque,
                      blandit vitae sem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>03</span>
                    </div>
                    <h4>Checkup &amp; Launch</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      Vestibulum tempor tristique neque non pretium. Etiam leo
                      risus, consectetur sagittis ullamcorper scelerisque,
                      blandit vitae sem.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/step-3.jpg"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cms