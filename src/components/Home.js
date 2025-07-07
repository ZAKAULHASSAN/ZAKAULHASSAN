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
            Software Engineer specializing in mobile app development and AI/ML. With a strong foundation in full-stack development and a passion for solving real-world problems, I build scalable, efficient applications that deliver intuitive user experiences and intelligent automation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
