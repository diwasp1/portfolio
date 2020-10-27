import React from "react";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <div className="header">portfolio</div>
        <div className="sub-header">
          my work
          <div className="border"></div>
        </div>
      </div>
      <div className="portfolio-content">
        {/* <div className="header">
          <ul className="port-links">
            <li>
              <a className="link-btn all active" id="all" href="">
                {" "}
                All{" "}
              </a>
            </li>
            <li>
              <a className="link-btn design" id="design" href="">
                {" "}
                Design{" "}
              </a>
            </li>
            <li>
              <a className="link-btn brand" id="brand">
                {" "}
                Brand{" "}
              </a>
            </li>
            <li>
              <a className="link-btn" id="photo">
                {" "}
                Photos{" "}
              </a>
            </li>
          </ul>
        </div> */}
        <div className="dis-container">
          <a href="https://engineerspost.com/">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/engineerspost.jpg")}
                  alt=""
                />
              </div>

              <div className="text">Visit Site</div>
              {/* <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div> */}
              <div className="overlay-color"></div>
            </div>
          </a>

          <a href="https://hub-remitt.netlify.app/">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/hubremit.png")}
                  alt=""
                />
              </div>
              <div className="text">visit site</div>
              {/* <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div> */}
              <div className="overlay-color"></div>
            </div>
          </a>

          <a href="https://sharonscollection.com/">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/sharonscollection.jpg")}
                  alt=""
                />
              </div>
              <div className="text">Visit Site</div>
              {/* <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div> */}
              <div className="overlay-color"></div>
            </div>
          </a>

          <a href="https://creative-ideas.netlify.app/">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/aga.jpg")}
                  alt=""
                />
              </div>
              <div className="text">visit site</div>
              {/* <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div> */}
              <div className="overlay-color"></div>
            </div>
          </a>

          <a href="https://gurudell.netlify.app/">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/gurudell.jpg")}
                  alt=""
                />
              </div>
              <div className="text">Visit Site</div>
              {/* <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div> */}
              <div className="overlay-color"></div>
            </div>
          </a>

          <a href="https://creative-ideas.netlify.app/">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/creativeidea.png")}
                  alt=""
                />
              </div>
              <div className="text">visit site</div>
              {/* <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div> */}
              <div className="overlay-color"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
