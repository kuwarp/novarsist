import React from "react";

function ContactUsArea() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-xl-6">
            <div className="title black">
              <span>Get In Touch</span>
              <h2>contact us if you have more questions.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>
              <h4>Location</h4>
              <p>
               Vijay Nagar Indore , Madhya Pradesh ,India
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-telephone" />
              </div>
              <h4>Phone</h4>
              <a href="tel:+91 12-3456-7890">+91 12-3456-7890</a>
              <a href="tel:+91 12-3456-7890">+91 12-3456-7890</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>
              <h4>Email</h4>
              <a href="mailto:info@example.com">info@novarsistech.com</a>
              <a href="mailto:support@example.com">support@novarsistech.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsArea;
