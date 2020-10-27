import React from "react";
import "./assets/css/style.css";
import "./assets/js/app.js"
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
