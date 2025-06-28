import React from 'react';


const skillsData = {
  Languages: [
    { name: 'Java', value: 90 },
    { name: 'Python', value: 95 },
    { name: 'C++', value: 85 },
    { name: 'React', value: 92 },
    { name: 'JavaScript', value: 94 },
    { name: 'HTML/CSS', value: 98 },
  ],
  Frameworks: [
    { name: 'React', value: 92 },
    { name: 'Node.js', value: 88 },
    { name: 'WordPress', value: 85 },
    { name: 'React-Native', value: 87 },
    { name: 'FastAPI', value: 90 },
  ],
  Libraries: [
    { name: 'pandas', value: 93 },
    { name: 'NumPy', value: 91 },
    { name: 'Matplotlib', value: 89 },
    { name: 'TensorFlow', value: 87 },
    { name: 'Keras', value: 86 },
  ],
  DeveloperTools: [
    { name: 'Git', value: 95 },
    { name: 'GitHub', value: 93 },
    { name: 'Postman', value: 90 },
    { name: 'VS Code', value: 94 },
    { name: 'Docker', value: 85 },
  ],
};

const SkillsSection = () => (
  <section id= 'skills' className="skills-section">
    <h2 className="skills-heading"> My Skills</h2>
    <div className="skills-grid">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-card">
          <h3>{category}</h3>
          {skills.map(skill => (
            <div key={skill.name} className="skill-bar">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-value">{skill.value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
