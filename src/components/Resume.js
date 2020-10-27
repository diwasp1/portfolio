import React from "react";

function Resume() {
  return (
    <section id="resume">
      <div className="resume-header">
        <div className="header">Summary</div>
        <div className="sub-header">
          Resume
          <div className="border"></div>
        </div>
      </div>
      <div className="resume-content">
        <div className="row">
          <div className="col-md-6">
            <div className="education">
              <div className="header">My Education</div>

              <div className="edu-container">
                <div className="major">Bachelor Degree</div>
                <div className="date">2015-2019</div>
                <div className="college">Kathmandu Engineering College</div>
                <div className="text">
                  Bachelor Degree in Electronics and Communication Engineering.
                </div>
              </div>

              <div className="edu-container">
                <div className="major">Higher Secondary Certificate</div>
                <div className="date">2013-2015</div>
                <div className="college">Prasadi Academy</div>
                <div className="text">Intermediate Certificate in Science.</div>
              </div>

              <div className="edu-container">
                <div className="major">School Leaving Certificate</div>
                <div className="date">until 2012</div>
                <div className="college">V.S Niketan</div>
                <div className="text">School Level Education</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="education">
              <div className="header">My Experience</div>

              <div className="edu-container">
                <div className="major">Front End Developer</div>
                <div className="date">2019-Present</div>
                <div className="college">An4Soft</div>
                <div className="text">
                  Working as a FrontEnd Developer and being involve in different
                  projects.
                </div>
              </div>

              <div className="edu-container">
                <div className="major">Full Stack Developer</div>
                <div className="date">2018-Present</div>
                <div className="college">Freelance</div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit, saepe est. Voluptatibus quisquam reprehenderit natus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="myskill-container">
        <div class="header">My Skills</div>
        <div className="row">
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div>Web Design</div>
                <div></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">HTML/CSS</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">JavaScript</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">React JS</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">Bootstrap</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">Wordpress</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">Sass</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">Php</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <div className="sub-header">
                <div className="title">Laravel</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="cv-btn">
          <a href="">Download CV</a>
        </div> */}
      </div>
    </section>
  );
}

export default Resume;
