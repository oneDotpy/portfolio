// src/components/Project.js
import React, { useRef, useState, useEffect } from 'react';
import './Project.css';

const projects = [
  {
    id: 1,
    title: 'Food Mood',
    date: '2024-02',
    language: 'Python',
    additionalTech: 'Pygame, BeautifulSoup',
    github: 'https://github.com/Albert-Jun/Food-Recipes',
    projectLink: '',
    description: "Food Mood is a food recommendation app built for the CSC111 Final Course Project. Food Mood was built using Python utilizing the Pygame library for the GUI. Using Food Mood, on top of food recommendations users also get a personal recipe book that is saved and viewable in the Python console. Users will be prompted with a few choices inside of the app. Their choices will then be processed to give them the top 10 foods (based off recipe ratings) that matches their needs and desires. The recipes were scraped from the internet's favorite food recipe websites that were then converted into graphs in Python which is later used to process users different inputs.",
    image: 'https://ibb.co/zVVJWRM'
  },
  {
    id: 2,
    title: 'Buddy Beacon',
    date: '2024-05-5',
    language: 'Figma',
    github: '',
    projectLink: 'https://www.figma.com/proto/o7s60MIKvdicRLxV66jpSY/Buddy-Beacon?node-id=2237-1601&starting-point-node-id=2237%3A1601&t=yTHj8P4dmq4jfgGo-1',
    description: 'Buddy Beacon is an app that aims to support University of Toronto students with a peer-to-peer escort system. Buddy Beacon is made to enhance safety during late hours through real-time location sharing, chatting and calling, and an emergency alert feature. Buddy Beacon won 3rd place at the Moral Code Hackathon 2024 held by EWB UofT.',
    image: 'https://ibb.co/MZ0xG3L'
  },
  {
    id: 3,
    title: 'Caribou Quest',
    date: '2024-05-21',
    language: 'JavaScript',
    additionalTech: 'React Native, Figma, MongoDB',
    github: '',
    projectLink: 'https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwcyd8jy0cedyg01t0g2278n/idea',
    description: 'Caribou quest is a traveling app which encourages the user to explore their surrounding area by utilizing a game like experience. Caribou Quest was made during the HawkHacks 2023 Hackathon.',
    image: 'https://ibb.co/nRg1FMj'
  },
  {
    id: 4,
    title: 'Simple Online BMI Calculator',
    date: '2024- 7',
    language: 'JavaScript',
    github: 'https://github.com/revou-fundamental-course/8-jul-24-oneDotpy',
    projectLink: 'https://revou-fundamental-course.github.io/8-jul-24-oneDotpy/',
    description: 'A simple BMI calculator website made for the RevoU Software Engineering Fundamental Course mini project. The webpage has 2 languages, Indonesian and English. The webpage has a download feature to download the results of the BMI  calculaator',
    image: 'https://i.ibb.co/XbPhBZp/Whats-App-Image-2024-10-23-at-17-24-50.jpg'
  },
  {
    id: 5,
    title: 'PERMIKA Toronto Landing Page',
    date: '2024-08',
    language: 'JavaScript',
    additionalTech: 'React.js',
    github: '',
    projectLink: 'https://onedotpy.github.io/PermikatoWebReact/',
    description: 'First official PERMIKA Toronto landing page. Made to boost engagement and streamline content delivery. Will continue to be developed and improved for the next year',
    image: 'https://i.ibb.co/jTg1QxY/image.png'
  },
  {
    id: 6,
    title: "'THIS' portfolio webpage",
    date: '2024-10',
    language: 'JavaScript',
    additionalTech: 'React.js, Tailwind CSS',
    github: '',
    projectLink: 'https://onedotpy.github.io/portfolio/',
    description: 'My personal portfolio webpage that would continuously be updated with my latest project. This project is made because I want to enhance my React and Javascript skills. I am also trying a new thing with this project, Tailwind CSS.',
    image: 'https://i.ibb.co/096ZjSL/image.png'
  },
];

const Project = () => {
  const [sortOption, setSortOption] = useState('date');
  const [dateFilter, setDateFilter] = useState('latest');
  const [languageFilter, setLanguageFilter] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  
  const carouselRef = useRef(null);

  const sortedProjects = [...projects]
    .filter((project) =>
      languageFilter ? project.language === languageFilter : true
    )
    .sort((a, b) => {
      const dateA = new Date(a.date.replace(/-/g, '/')); // Ensure cross-browser compatibility
      const dateB = new Date(b.date.replace(/-/g, '/'));
      if (dateFilter === 'earliest') return dateA - dateB;
      if (dateFilter === 'latest') return dateB - dateA;
      return 0;
    });

  const [showRightArrow, setShowRightArrow] = useState(sortedProjects.length > 1);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const handleNext = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
  };

  const handlePrev = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [dateFilter]);  

  useEffect(() => {
    if (sortOption === 'date') {
      setLanguageFilter(''); // Reset language filter
    } else if (sortOption === 'language') {
      setDateFilter('latest'); // Reset date filter
    }
  }, [sortOption]);  

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
    };
  
    const carousel = carouselRef.current;
  
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
  
      // Initial check to set arrow visibility correctly
      handleScroll();
  
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [sortedProjects]);  
  

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open'); // Add class to lock background scroll
    } else {
      document.body.classList.remove('modal-open'); // Remove class to restore background scroll
    }
  }, [selectedProject]);
  
  return (
    <div className="project-section" id="project">
      <h2>Projects</h2>

      <div className="filters">
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="date">Date</option>
          <option value="language">Language</option>
        </select>

        {sortOption === 'date' && (
          <select onChange={(e) => setDateFilter(e.target.value)} value={dateFilter}>
            <option value="earliest">By Earliest</option>
            <option value="latest">By Latest</option>
          </select>
        )}

        {sortOption === 'language' && (
          <select onChange={(e) => setLanguageFilter(e.target.value)} value={languageFilter}>
            <option value="">Select Language</option>
            {[...new Set(projects.map((p) => p.language))].map((language) => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        )}
      </div>

      <div className="carousel-container">
        {showLeftArrow && (
          <button className="arrow left-arrow" onClick={handlePrev}>
            &#8592;
          </button>
        )}

        <div className="project-cards" ref={carouselRef}>
          {sortedProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <h3>{project.title}</h3>
              <p>{project.date}</p>
              <p>{project.language}</p>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button className="arrow right-arrow" onClick={handleNext}>
            &#8594;
          </button>
        )}
      </div>
      
      {sortedProjects.length > 1 ? (
        <div className="slide-hint">Swipe to explore more projects &rarr;</div>
      ) : null}


      {selectedProject && (
        <div className="modal">
          <div className="modal-content-wrapper">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>Date: {selectedProject.date}</p>
            <p>Language: {selectedProject.language}</p>
            {selectedProject.additionalTech && (
              <p>Additional Tech: {selectedProject.additionalTech}</p>
            )}
            <div className="modal-buttons">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <button className="modal-button">GitHub</button>
                </a>
              )}
              {selectedProject.projectLink && (
                <a href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer">
                  <button className="modal-button">Visit Project</button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}



    </div>
  );
};

export default Project;
