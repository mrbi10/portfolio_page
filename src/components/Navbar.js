import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-brand">
        <a href="#hero" rel="home">Abinanthan V</a>
      </div>

      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tech">Skills</a></li>
        <li><a href="#achievements">Certifications</a></li>
        <li><a href="#contact" className="contact-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;