// Education.js
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../App.css';

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const educationData = [
    {
      degree: 'BS Software Engineering',
      institute: 'University of Mianwali',
      year: '2021 – 2025',
      details: `In-depth coursework in full-stack development, machine learning, and software architecture. 
                Final-year project focuses on AI-based image search and e-commerce (BUYZI App).`
    },
    {
      degree: 'FSc Pre-Engineering',
      institute: 'PAEC Boys College Chashma',
      year: '2018 – 2020',
      details: `Studied core engineering subjects including Mathematics, Physics, and Chemistry. 
                Graduated with distinction in academics and participated in inter-college science exhibitions.`
    }
  ];

  return (
    <section id="education" className="education-section fade-in">
      <h2>Education</h2>
      <ul className="education-list">
        {educationData.map((edu, index) => (
          <li key={index}>
            <div className="education-header" onClick={() => toggleDetails(index)}>
              <div>
                <div className="degree-title">{edu.degree}</div>
                <div className="institute">{edu.institute}</div>
                <div className="year">{edu.year}</div>
              </div>
              <div className="icon-toggle">
                {expandedIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {expandedIndex === index && (
              <div className="education-details">{edu.details}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
