// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'project', 'socials'];
    const scrollPosition = window.scrollY;

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom) {
          setActiveSection(id);
        }
      }
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a
        href="#home"
        className={activeSection === 'home' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          scrollToSection('home');
        }}
      >
        Home
      </a>
      <a
        href="#project"
        className={activeSection === 'project' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('project');
        }}
      >
        Projects
      </a>
      <a
        href="#socials"
        className={activeSection === 'socials' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('socials');
        }}
      >
        Connect
      </a>
    </nav>
  );
};

export default Navbar;
