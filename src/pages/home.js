import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";

function App() {
  useEffect(() => {
    feather.replace();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Home Section */}
      <section id="home" className="home">
            <h1>Cyber Community Universitas Gunadarma</h1>
            <img src="/img/ccug-gif.gif" alt="profil" />
            <h2>CTF Team Universitas Gunadarma</h2>
            <h3>Tim Akademik Universitas Gunadarma</h3>
            <p>
              Contact us at <span>cycomug@gmail.com</span> (for business inquiries, event invitation, etc.)
            </p>

          <div className="button-group">
            <Link to="/aboutus" className="btn">About Us</Link>
            <Link to="/gettingstarted" className="btn">Getting Started</Link>
          </div>
      </section>
    </div>
  );
}

export default App;