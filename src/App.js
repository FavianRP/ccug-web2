import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Home from "./pages/home.js";
import GettingStarted from "./pages/gettingstarted.js";
import AboutUs from "./pages/aboutus.js";
import Members from "./pages/members.js";
import Contest from "./pages/contest.js";
import Blog from "./pages/blog.js";
import Login from "./pages/loginccug.js";
import feather from "feather-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/style.css";
import "@fontsource/inter"; // Untuk font Inter
import "@fontsource/roboto-mono"; // Untuk font Roboto Mono


function TitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    // Mapping judul berdasarkan path
    const titles = {
      "/": "Cyber Community Universitas Gunadarma",
      "/aboutus": "CCUG - About Us",
      "/gettingstarted": "getting_started",
      "/members": "CCUG - Members",
      "/contest": "CCUG - Contest",
      "/blog": "CCUG - Blog",
      "/loginccug": "CCUG - Login",
    };

    document.title = titles[location.pathname] || "Cyber Community";
  }, [location]);

  return null; // Komponen ini hanya untuk side effect, tidak perlu merender apapun
}

function App() {
  useEffect(() => {
    feather.replace();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <TitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gettingstarted" element={<GettingStarted />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/loginccug" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
