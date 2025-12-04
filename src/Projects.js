import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "ERP",
    description: "A complete ERP frontend built for academic workflows including attendance, marks, users, authentication, and role-based access.",
    tech: "React, JavaScript, Axios, JWT",
    link: "https://github.com/mrbi10/erp"
  },
  {
    title: "Erp_Mnmjec_Backend",
    description: "Backend service powering the ERP system with secure APIs, roles (CA, Staff, HOD, Principal), and MySQL-based data storage.",
    tech: "Node.js, Express, MySQL, JWT",
    link: "https://github.com/mrbi10/Erp_Mnmjec_Backend"
  },
  {
    title: "Trip",
    description: "A simple travel-tracking tool with date handling, calculations, and a clean React UI.",
    tech: "React, JavaScript",
    link: "https://github.com/mrbi10/Trip"
  },

  {
    title: "TWINSYNC",
    description: "A TypeScript experiment/project exploring synced UI logic and component behavior.",
    tech: "TypeScript",
    link: "https://github.com/mrbi10/TWINSYNC"
  },
  {
    title: "portfolio_page",
    description: "An earlier version of your personal portfolio focusing on clean layout and simple CSS styling.",
    tech: "HTML, CSS",
    link: "https://github.com/mrbi10/portfolio_page"
  },
  {
    title: "flight_train_reservation_system",
    description: "A prototype reservation system for booking flights and trains with TypeScript logic handling seats and flows.",
    tech: "TypeScript",
    link: "https://github.com/mrbi10/flight_train_reservation_system"
  },
  {
    title: "test",
    description: "A small HTML-based test project used for quick UI experiments.",
    tech: "HTML, CSS",
    link: "https://github.com/mrbi10/test"
  },
  {
    title: "cgpa-calculator",
    description: "A CGPA calculator that computes final GPA values from subject grades and credits with a responsive UI.",
    tech: "React, TypeScript",
    link: "https://github.com/mrbi10/cgpa-calculator"
  },
  {
    title: "portfolio",
    description: "The current version of your portfolio with animations, custom components, and responsive modern styling.",
    tech: "React, CSS, Framer Motion",
    link: "https://github.com/mrbi10/portfolio"
  },
  {
    title: "exam_fees",
    description: "A simple portal that tracks student exam fee submission status and displays payment information clearly.",
    tech: "React, JavaScript",
    link: "https://github.com/mrbi10/exam_fees"
  },
  {
    title: "Feeportal",
    description: "A basic fee payment management system that organizes student payments and maintains transaction records.",
    tech: "HTML, JavaScript, Backend Concepts",
    link: "https://github.com/mrbi10/Feeportal"
  },
  {
    title: "attendance-api",
    description: "A REST API for attendance management with endpoints for storing, updating, and retrieving attendance records.",
    tech: "Node.js, Express, JavaScript",
    link: "https://github.com/mrbi10/attendance-api"
  },
  {
    title: "student-verify",
    description: "A modern web app that verifies student academic details using Register Number and DOB with Excel/JSON data.",
    tech: "React, JavaScript",
    link: "https://github.com/mrbi10/student-verify"
  },
  {
    title: "studentinfo",
    description: "A Python desktop application for student registration and data management using SQLite and Tkinter.",
    tech: "Python, SQLite, Tkinter",
    link: "https://github.com/mrbi10/studentinfo"
  },
  {
    title: "reddit-fake-news-detector",
    description: "NLP-based machine learning system that detects fake news in Reddit posts through text preprocessing and classifiers.",
    tech: "Python, NLP, scikit-learn",
    link: "https://github.com/mrbi10/reddit-fake-news-detector"
  },
  {
    title: "Jarvis Voice Assistant",
    description: "A voice-activated personal assistant that executes commands, opens apps, and provides intelligent responses.",
    tech: "Python, SpeechRecognition, pyttsx3",
    link: "https://github.com/mrbi10/Jarvis-Voice-Assistant"
  },
  {
    title: "Hotel Management System",
    description: "A desktop app for managing hotel operations including booking, customer data, and billing using MySQL.",
    tech: "Python, MySQL",
    link: "https://github.com/mrbi10/Hotel-Management-System"
  }
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