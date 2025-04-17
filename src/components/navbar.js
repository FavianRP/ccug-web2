import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import feather from "feather-icons";
import "../styles/style.css";

function Navbar() {
  const location = useLocation(); // Ambil path halaman saat ini

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
       <Link to="/" className="logo">
          <img src="/img/navbar_logo.png" alt="logo" className="logo" />
      </Link>
      <div className="navbar-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/aboutus" className={location.pathname === "/aboutus" ? "active" : ""}>About Us</Link>
        <Link to="/members" className={location.pathname === "/members" ? "active" : ""}>Members</Link>
        <Link to="/contest" className={location.pathname === "/contest" ? "active" : ""}>Contest</Link>
        <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
