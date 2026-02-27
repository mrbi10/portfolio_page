import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    title: "MNMJEC ERP System",
    description:
      "A complete academic ERP platform handling attendance, marks, placement training, role-based access (CA, Staff, HOD, Principal), authentication, and analytics dashboards.",
    tech: "React, Node.js, Express, MySQL, JWT",
    link: "/mnmjec-erp",
    internal: true
  },
  {
    title: "Student Verification Portal",
    description:
      "A web application that verifies student academic records using Register Number and DOB with JSON/Excel-based validation logic.",
    tech: "React, JavaScript",
    link: "https://github.com/mrbi10/student-verify",
    internal: false
  },
  {
    title: "Attendance API",
    description:
      "RESTful API service for attendance management with structured endpoints for storing, updating, and retrieving records securely.",
    tech: "Node.js, Express",
    link: "https://github.com/mrbi10/attendance-api",
    internal: false
  },
  {
    title: "Reddit Fake News Detector",
    description:
      "Machine learning project that detects fake news in Reddit posts using NLP preprocessing and classification models.",
    tech: "Python, NLP, scikit-learn",
    link: "https://github.com/mrbi10/reddit-fake-news-detector",
    internal: false
  },
  {
    title: "CGPA Calculator",
    description:
      "A responsive GPA calculator that computes semester and cumulative CGPA from subject grades and credits.",
    tech: "React, TypeScript",
    link: "https://github.com/mrbi10/cgpa-calculator",
    internal: false
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((proj, i) => (
          <div
            className="project-card card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>

            {proj.internal ? (
              <Link to={proj.link} className="link">
                View Case Study →
              </Link>
            ) : (
              <a
                href={proj.link}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;