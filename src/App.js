
import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/Home';
import AboutMe from './components/aboutMe';
import Achievements from './components/achievements';
import Projects from './components/Projects';
import ContactUs from './components/contactUs';
import SkillsSection from './components/skills';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <SkillsSection/>
      <Achievements />
      <Projects />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;