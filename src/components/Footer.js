import React from "react";

function Footer() {
    

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div class="footer-container">
        Copyright &copy; 2020 <span>Dibas</span>. All Rights Reserved.
      </div>
      <a href="" id="button" onClick={scrollTop}>
        <i class="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
