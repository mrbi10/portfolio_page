import React from 'react';
import './Achievements.css';

const certifications = [
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
    issued: 'Apr 2025',
    skills: ['Python', 'Data Analysis'],
    logo: 'https://internalapp.nptel.ac.in/B2C/exam_form/images/logo.png',
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn',
    issued: 'Jul 2024',
    skills: ['Programming', 'Software Development'],
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
  },
  {
    title: 'Introduction to Career Skills in Software Development',
    issuer: 'LinkedIn',
    issued: 'Jul 2024',
    skills: ['Software Development', 'Career Management', 'Tech Career Skills'],
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">📜 Licenses & Certifications</h2>
      <div className="achievements-list">
        {certifications.map((cert, idx) => (
          <div className="achievement-card alt1" key={idx}>
            <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
            <div className="achievement-info">
              <h3>{cert.title}</h3>
              <p className="achievement-sub">{cert.issuer}</p>
              <p className="achievement-year">Issued {cert.issued}</p>
              <div className="cert-skills">
                {cert.skills.map((skill, i) => (
                  <span className="skill-badge" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
