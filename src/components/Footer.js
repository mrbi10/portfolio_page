import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Abinanthan V · ERP Developer · Chennai, India
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/mrbi10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mrbi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>

          <a
            href="mailto:abinanthan1006@gmail.com"
            aria-label="Send Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;