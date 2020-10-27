import React from "react";

function NavBar() {

  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.querySelector(".bars").style.display = "none";
    document.querySelector(".close-bars").style.display = "block";
    document.querySelector(".close-bars").style.transition = "5s ease-in-out";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.querySelector(".bars").style.display = "block";
    document.querySelector(".close-bars").style.display = "none";
  }



  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="index.html" class="logo">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src={require("../assets/images/IMG_4803.png")}
                  alt=""
                />
              </div>
              <div className="title">Dibas Paudel</div>
            </a>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#services">What I Do</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="https://www.facebook.com/dibas.paudel.54">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
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
            <div className="bars d-lg-none">
              <span onClick={openNav}>
                <i className="fa fa-bars"></i>
              </span>
            </div>
            <div className="close-bars">
              <span onClick={closeNav}>
                <i className="fas fa-times"></i>
              </span>
            </div>
          </div>
        </div>

        <div id="mySidenav" className="sidenav">
          {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
            >&times;</a
          > */}
          <a href="#home" onClick={closeNav}>
            Home
          </a>
          <a href="#about" onClick={closeNav}>
            About Me
          </a>
          <a href="#services" onClick={closeNav}>
            What I Do
          </a>
          <a href="#resume" onClick={closeNav}>
            Resume
          </a>
          <a href="#portfolio" onClick={closeNav}>
            Portfolio
          </a>
          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar
