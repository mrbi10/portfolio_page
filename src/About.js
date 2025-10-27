import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content" data-aos="fade-right">
        <div className="about-photo">
          <img src="/profile.jpg" alt="Abinanthan" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Abinanthan — a developer who treats code like a design medium.
            I love clean architecture, meaningful UI, and the subtle art of making things feel “just right.”
            Currently based in Chennai, I enjoy solving problems with elegance and precision.
          </p>

          <div className="quick-facts">
            <div>
              <span>Age</span>
              <strong>20</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Chennai, Tamilnadu</strong>
            </div>
            <div>
              <span>Interests</span>
              <strong>Full-Stack Development, System Design, Creative Engineering</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
