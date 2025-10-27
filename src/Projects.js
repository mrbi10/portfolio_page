import React from 'react';
import './Projects.css';

const projects = [
    // --- Existing Projects ---
    {
        title: "Student Verify App",
        description: "Verifies student data using Register No. and D.O.B with a clean React UI, driven by JSON/Excel data for quick lookups.",
        tech: "React, JSON, Excel, GitHub Pages, Render",
        link: "https://github.com/mrbi10/student-verify"
    },
    {
        title: "Jarvis Voice Assistant",
        description: "A personal desktop assistant utilizing voice commands to automate tasks like application launching and web searching.",
        tech: "Python, pyttsx3, speechRecognition",
        link: "https://github.com/mrbi10/Jarvis-Voice-Assistant"
    },
    {
        title: "Student Info System",
        description: "A basic desktop application providing a portal for student registration, data editing, and search functionalities.",
        tech: "Python, SQLite3, Tkinter",
        link: "https://github.com/mrbi10/studentinfo"
    },
    {
        title: "Reddit Fake News Detector",
        description: "Machine learning project using NLP to detect potentially misleading or fake news within Reddit comments.",
        tech: "Python, NLP, scikit-learn, Reddit API",
        link: "https://github.com/mrbi10/reddit-fake-news-detector"
    },
    {
        title: "Hotel Management System",
        description: "A console-based C++ application for managing hotel operations including room booking, billing, and CRUD operations.",
        tech: "C++, File Handling, CRUD",
        link: "https://github.com/mrbi10/Hotel-Management-System"
    },
    
    // --- New Projects Added (with professional descriptions) ---
    {
        title: "CGPA Calculator",
        description: "A utility tool designed to accurately calculate Cumulative Grade Point Average (CGPA) based on individual subject grades and credits.",
        tech: "React, JavaScript, HTML, CSS",
        link: "https://github.com/mrbi10/cgpa-calculator"
    },
    {
        title: "Exam Fee Portal",
        description: "A streamlined web application to track, manage, and process student exam fees submission statuses.",
        tech: "React, Frontend Development",
        link: "https://github.com/mrbi10/exam_fees"
    },
    {
        title: "Fee Payment System (Feeportal)",
        description: "Secure system designed for handling student fee payments, integrating payment gateway principles and tracking payment records.",
        tech: "Full-Stack Concepts, Security, Databases",
        link: "https://github.com/mrbi10/Feeportal"
    },
    {
        title: "Attendance API",
        description: "A backend service/API for managing and tracking student attendance records, designed for integration with frontend applications.",
        tech: "Backend Development, API Design, REST",
        link: "https://github.com/mrbi10/attendance-api"
    },
    {
        title: "Personal Portfolio (This Site!)",
        description: "The source code for this very portfolio, demonstrating modern React development, custom UI/UX, and component design.",
        tech: "React, SCSS/CSS, Framer Motion, Responsive Design",
        link: "https://github.com/mrbi10/portfolio"
    },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* The 'card' class in App.css ensures premium styling */}
        {projects.map((proj, i) => (
          <div className="project-card card" key={i} data-aos="fade-up" data-aos-delay={i * 50}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>
            <a href={proj.link} className="link" target="_blank" rel="noopener noreferrer">
              View Code &nbsp; &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;