import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-header">
        <div className="header">contact</div>
        <div className="sub-header">
          get in touch
          <div className="border"></div>
        </div>
      </div>
      <div className="contact-content">
        <div className="row">
          <div className="col-md-4">
            <div className="address-container">
              <div className="header">Address</div>
              <div className="para">Koteshwor, Kathmandu, Nepal</div>
              <div className="text">
                <i className="fas fa-phone"></i> 9861041900
              </div>
              <div className="text">
                <i className="fas fa-envelope"></i> dibasp21@gmail.com
              </div>
              <div className="follow-links">
                <div className="header">Follow Me</div>

                <div className="social-links">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/dibas.paudel.54">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/diwasp1">
                        <i className="fab fa-github-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/dibas-paudel-a538b01a8/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="message-container">
              <div className="header">Send us a note</div>
              <form action="">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Tell us more about your needs......"
                    className="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <button className="message-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
