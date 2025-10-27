import React from 'react';
import './TechStack.css';

const tech = {
  Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Canva', 'Adobe Photoshop'],
  Backend: ['Node.js', 'Java', 'C', 'Python'],
  Tools: ['Git', 'VSCode', 'Figma', 'Postman', 'Microsoft Office'],
  SoftSkills: ['Time Management', 'Video Editing', 'Branding', 'Content Editing', 'Career Management'],
  Fundamentals: [
    'Programming Foundations: Fundamentals',
    'Programming Foundations: Beyond the Fundamentals',
    'Software Development',
    'Tech Career Skills'
  ]
};


function TechStack() {
  return (
    <section className="techstack" id="tech">
      <h2>My Tech Stack</h2>
      <div className="tech-categories">
        {Object.entries(tech).map(([category, tools]) => (
          <div className="tech-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {tools.map(tool => (
                <li key={tool} title={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
