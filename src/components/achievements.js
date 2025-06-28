import React from 'react';

const achievements = {
  "Competitions & Conferences": [
    "Programming & Graphic Design Competition – NexGen Society (2025)",
    "Frontiers in Computational Intelligence & Data Science Conference (2025)",
  ],
  Certifications: [
    "React Native – Meta",
    "Generative AI: Prompt Engineering – IBM",
    "Machine Learning with Python – IBM",
    "Programming in Python & JavaScript – Meta",
    "Version Control – Meta",
  ],
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section fade-in fade-in-delay-2">
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievement-grid">
        {Object.entries(achievements).map(([category, items]) => (
          <div className="achievement-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="achievement-item">
                  <span className="bullet-icon">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
