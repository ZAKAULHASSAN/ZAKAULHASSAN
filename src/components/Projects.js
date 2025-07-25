import React from 'react';

const projectList = [
  {
    title: "BUYZI App",
    description: "AI-based shopping experience with visual search using ResNet50. Built using React Native, Django, and MongoDB.",
    github: "https://github.com/ZAKAULHASSAN/BUYZI-APP"
  },
  {
    title: "ResQNet",
    description: "Full-stack disaster relief coordination platform built with React Native, Node.js, Express, and MongoDB.",
    github: "https://github.com/ZAKAULHASSAN/RESQNET-DRCP"
  },
  {
    title: "TourNest",
    description: "A tour booking website with React.js, featuring dynamic routing, booking management, and localStorage for data persistence.",
    github: "https://github.com/ZAKAULHASSAN/Tour-Nest"
  },
  {
  title: "AgriDiagnosis",
  description: "Mobile-based crop disease detection system using TensorFlow Lite. Achieved 97% accuracy with optimized model via pruning and quantization.",
  github: "https://github.com/ZAKAULHASSAN/Agri-Diagnosis"
},
{
  title: "StudyGlobe",
  description: "Educational mobile app for global admissions and scholarships. Developed with React Native; features include program search, save lists, and admission guides.",
  github: "https://github.com/ZAKAULHASSAN/StudyGlobe"
},
  {
    title: "Weather App",
    description: "Displays real-time weather updates using the OpenWeather API. Designed with React for clean user interaction.",
    github: "https://github.com/ZAKAULHASSAN/Projects/tree/Weather-App"
  },
  {
    title: "Netflix Clone",
    description: "Responsive UI clone of Netflix using HTML5, CSS3, and JavaScript. Features carousel, grid layout, and basic navigation.",
    github: "https://github.com/ZAKAULHASSAN/Projects/tree/Netflix-Clone"
  },
  {
    title: "Amazon Clone",
    description: "A fully responsive front-end replica of Amazon's homepage with cart UI and product layouts.",
    github: "https://github.com/ZAKAULHASSAN/Projects/tree/AmazonClone"
  },
 
  
];

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in fade-in-delay-2">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
