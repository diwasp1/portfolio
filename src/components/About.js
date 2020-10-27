import React from "react";

function About() {
  return (
    <section id="about">
      <div className="about-header">
        <div className="header">ABOUT ME</div>
        <div className="sub-header">
          Know Me More
          <div className="border"></div>
        </div>
      </div>
      <div className="row about-des-container">
        <div className="col-lg-7">
          <div className="about-description">
            <div className="header">
              I'm <span>Dibas Paudel,</span> a Web Developer
            </div>
            <div className="para">
              My name is Dibas Paudel. I'm a Freelance Full Stack Developer
              based in Kathmandu, Nepal, and I'm very passionate and dedicated
              to my work .With 1 year experience as a Full Stack
              Developer, I have acquired the skills necessary to build great and
              premium websites. I help you build brand for your business at an
              affordable price.
            </div>
            <div className="para">
              Delivering work within time and budget which meets client’s
              requirements is our moto.
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="about-bio">
            <ul className="bio-list">
              <li>
                <span>Name: </span>
                Dibas Paudel
              </li>
              <li>
                <span>Email: </span>
                dibasp21@gmail.com
              </li>
              <li>
                <span>Age: </span>
                24
              </li>
              <li>
                <span>From: </span>
                Kathmandu, Nepal
              </li>
            </ul>
            {/* <div className="about-btn">
              <a href=""> Download CV </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About