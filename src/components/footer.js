import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} ZAKA UL HASSAN</p>
      <div className="social-icons">
        <a href="https://github.com/ZAKAULHASSAN" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/zaka-ul-hassan" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:zakaulhasssan46@gmail.com">
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
