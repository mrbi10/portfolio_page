import React from "react";
import "./Timeline.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';

const timelineData = [
  {
    title: "B.E. Computer Science and Engineering",
    location: "Misrimal Navajee Munoth Jain Engineering College",
    isCurrent: true,
    date: "Nov 2022 – May 2026 (Expected)",
    level: "college",
    description: "Coursework includes C, Python, and core CS fundamentals. Focused on development, systems, and emerging tech.",
  },
  {
    title: "HSC (11th & 12th Standard) – Computer Science",
    location: "Shri Natesan Vidyalaya Matriculation Higher Secondary School",
    date: "Jun 2020 – May 2022",
    level: "school",
    description: "Graduated with focus on Computer Science, Math, and programming foundations (HTML, CSS).",
  },
  {
    title: "SSLC (10th Standard)",
    location: "Shri Natesan Vidyalaya Matriculation Higher Secondary School",
    date: "Jun 2019 – May 2020",
    level: "school",
    description: "Completed with strong foundation in core subjects including Math and Science.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="timeline-dot">
              <FontAwesomeIcon icon={item.level === "college" ? faUniversity : faSchool} />
            </div>
            <div className="timeline-content">
              <h3>
                {item.title}
                {item.isCurrent && <span className="current-badge">Present</span>}
              </h3>
              <span className="timeline-location">{item.location}</span>
              <span className="timeline-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}