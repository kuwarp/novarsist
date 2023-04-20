/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function ContactForm() {
  return (
    <>
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="contact-form">
                <h3>Have Any Questions</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        placeholder="Your message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <input type="submit" defaultValue="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1YQLO70Ay9Fhkttgn-AXCp_IFZyo&hl=en_US&ehbc=2E312F" width="640" height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
