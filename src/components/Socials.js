// src/components/Socials.js
import React from 'react';
import linkedinLogo from "../assets/png/icons/linkedin.png";
import emailLogo from "../assets/png/icons/email.png";
import gitLogo from "../assets/png/icons/github.png"
import './Socials.css'; // Import CSS for Socials

const Socials = () => {
  return (
    <div className="socials-section" id="socials">
      <h2>Let's get in touch!</h2>
      <div className="socials-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={gitLogo} alt="GitHub" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="mailto:youremail@example.com">
          <img src={emailLogo} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
