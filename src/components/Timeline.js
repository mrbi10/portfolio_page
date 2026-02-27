import React from "react";
import "./Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faSchool } from "@fortawesome/free-solid-svg-icons";

const timelineData = [
  {
    title: "B.E. Computer Science and Engineering",
    location: "Misrimal Navajee Munoth Jain Engineering College, Chennai",
    isCurrent: true,
    date: "Nov 2022 – May 2026 (Expected)",
    level: "college",
    description:
      "Focused on full-stack development, system design, database architecture, and scalable web applications. Built and deployed the MNMJEC ERP system during undergraduate studies.",
  },
  {
    title: "HSC – Computer Science",
    location:
      "Shri Natesan Vidyalaya Matriculation Higher Secondary School",
    date: "Jun 2020 – May 2022",
    level: "school",
    description:
      "Specialized in Computer Science and Mathematics. Built foundational knowledge in programming, HTML, and logical problem solving.",
  },
  {
    title: "SSLC",
    location:
      "Shri Natesan Vidyalaya Matriculation Higher Secondary School",
    date: "Jun 2019 – May 2020",
    level: "school",
    description:
      "Completed secondary education with strong performance in Mathematics and Science.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">
        Education & Experience of Abinanthan V
      </h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            className="timeline-item"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="timeline-dot">
              <FontAwesomeIcon
                icon={item.level === "college" ? faUniversity : faSchool}
              />
            </div>

            <div className="timeline-content">
              <h3>
                {item.title}
                {item.isCurrent && (
                  <span className="current-badge">Present</span>
                )}
              </h3>

              <span className="timeline-location">
                {item.location}
              </span>

              <span className="timeline-date">
                {item.date}
              </span>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}