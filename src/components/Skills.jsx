import React from 'react';
import './Skills.css';

const Skills = () => {
  // Modifie ces données avec tes compétences
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'Postgresql/MySql', level: 75 },
    { name: 'JavaScript', level: 60 },
    { name: 'PHP', level: 55 },
    { name: 'React', level: 25 },
    { name: 'Git', level: 25 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;