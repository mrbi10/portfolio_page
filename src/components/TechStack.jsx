import React from "react";
import "./TechStack.css";

const tech = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "REST API Development", "JWT Authentication"],
  Database: ["MySQL", "Database Design", "Query Optimization"],
  DevTools: ["Git", "Postman", "VS Code", "Linux Environment"],
};

function TechStack() {
  return (
    <section className="techstack" id="tech">
      <h2>Technical Skills of Abinanthan V</h2>

      <div className="tech-categories">
        {Object.entries(tech).map(([category, tools]) => (
          <div className="tech-card card" key={category}>
            <h3>{category}</h3>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;