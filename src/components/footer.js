import React, { useEffect } from "react";
import feather from "feather-icons";
import "../styles/style.css";

function Footer() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <footer>
      <div className="row">
        <p>
          Made with <i data-feather="heart" className="heart-icon"></i> by<a href="https://www.instagram.com/cybercom.ug/" className="footer-link" target="_blank" rel="noopener noreferrer"> CCUG</a>
        </p>
        <p className="credit">CCUG • <span className="copyright-symbol">&copy;</span> 2025</p>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/cybercom.ug/"><i data-feather="instagram"></i></a>
        <a href="https://linkedin"><i data-feather="linkedin"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
