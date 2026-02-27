import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content" data-aos="fade-right">
        
        <div className="about-photo">
          <img
            src="/abinanthan-v.jpg"
            alt="Abinanthan V - ERP Developer from Chennai"
          />
        </div>

        <div className="about-text">
          <h2>About Abinanthan V</h2>

          <p>
            Abinanthan V is a Computer Science Engineering student based in Chennai
            and a full stack developer specializing in React, Node.js, Express,
            and MySQL. He designed and developed the MNMJEC ERP system — a
            role-based academic enterprise resource planning platform used for
            managing students, attendance, placements, and training modules.
          </p>

          <p>
            Abinanthan focuses on scalable backend architecture, secure authentication
            systems using JWT, database optimization in MySQL, and clean
            frontend experiences using React. His work blends system design,
            performance thinking, and practical deployment strategies.
          </p>

          <div className="quick-facts">
            <div>
              <span>Age</span>
              <strong>20</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Chennai, Tamil Nadu, India</strong>
            </div>

            <div>
              <span>Specialization</span>
              <strong>
                ERP Systems, Full-Stack Development, System Architecture
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;