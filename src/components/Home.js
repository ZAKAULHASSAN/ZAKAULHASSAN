// Home.js
import React from 'react';
import '../App.css';
import profileImg from './zz.jpg';

function Home() {
  return (
    <section id="home" className="home-section fade-in fade-in-delay-1">
      <div className="home-content">
        <div className="home-image">
          <img src={profileImg} alt="Zaka Ul Hassan" />
        </div>
        <div className="home-text">
          <h1>Hi, I'm <span className="highlight">Zaka Ul Hassan</span></h1>
          <h3 className="subtitle">Software Engineer | AI Enthusiast | Mobile App Developer</h3>
          <p className="home-bio">
            Final-year Software Engineering student specializing in full-stack development,
            AI, and machine learning. I build efficient, scalable solutions to solve
            real-world problems and enhance user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
