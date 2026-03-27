'use client'
import React, { useRef, useState, useEffect } from 'react'
import './Project.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 1,
    title: 'TurboType',
    date: '2025-09',
    endDate: null,
    language: 'Kotlin',
    additionalTech: 'Jetpack Compose, Firebase, Room, Gemini API, Android',
    github: 'https://github.com/csc301-2025-f/project-24-turbotype',
    projectLink: '',
    description: 'An Android multiplayer typing game built with a team of six at the University of Toronto for CSC301. Players race car avatars in real time — typing speed and accuracy move your car. Features Practice, Challenge, Endless, and Teach modes, real-time multiplayer for up to four players via Firebase Realtime Database, AI-generated practice text via the Gemini API, a gacha-based avatar unlock system, global leaderboards, and a friends system. Built in Kotlin with Jetpack Compose following Clean Architecture/MVVM, using Room for local caching and Firebase for cloud sync and authentication. Contributed as Backend Developer.',
    image: '/screenshots/turbotype/preview.png',
    badge: '',
  },
  {
    id: 2,
    title: 'MemoryCare',
    date: '2026-01',
    endDate: null,
    language: 'Dart',
    additionalTech: 'Flutter, Firebase Firestore, Firebase Auth, FCM, Cloud Functions',
    github: 'https://github.com/oneDotpy/iteration-zero',
    projectLink: '',
    description: 'A Flutter prototype built for CSC318, designed around user research with caregivers and care recipients affected by cognitive decline. Features two distinct sides — caregivers can send personalized reassurance messages, browse evidence-based guidance on behaviors like sundowning and wandering, and manage care recipients; care recipients can access reassurance, guided breathing exercises, and simulated voice playback from their caregiver. Built in two versions: a demo with in-memory state and a full Firebase version with real-time Firestore sync, Firebase Auth, push notifications via FCM, and Cloud Functions. Includes comprehensive accessibility support — high contrast, text scaling, and reduced motion.',
    image: '/screenshots/memory-care/preview.png',
    badge: '',
  },
  {
    id: 3,
    title: 'Caribou Quest',
    date: '2024-03',
    endDate: '2024-03',
    language: 'JavaScript',
    additionalTech: 'React Native, MongoDB, OpenAI API',
    github: '',
    projectLink: 'https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwcyd8jy0cedyg01t0g2278n/idea',
    description: 'A gamified city exploration app with AI-driven recommendations for activities and local places. Built with React Native and MongoDB, integrating the OpenAI API for personalized suggestions and an image detection API with AR for interactive location-based tasks.',
    image: '/screenshots/caribou-quest/preview.png',
    badge: 'HawkHacks 2024',
  },
  {
    id: 4,
    title: 'Partial Word Writer',
    date: '2025-09',
    endDate: '2025-12',
    language: 'Kotlin',
    additionalTech: 'TypeScript, Android, PostgreSQL, MongoDB, Google Cloud',
    github: '',
    projectLink: '',
    description: 'A full-stack Android app built in Kotlin for a private client, developed from a TypeScript prototype. Predicts full words from partial inputs using sentence-level context modeling. Backend APIs are deployed on Google Cloud with MongoDB for low-latency prediction lookups and PostgreSQL for structured data storage.',
    image: '/screenshots/partial-word-writer/preview.png',
    badge: '',
  },
  {
    id: 7,
    title: 'IoTherm',
    date: '2025-01',
    endDate: '2025-01',
    language: 'C++',
    additionalTech: 'ESP8266, HTML, CSS',
    github: 'https://github.com/oneDotpy/IoTherm',
    projectLink: 'https://devpost.com/software/iotherm',
    description: 'A smart energy optimization system for household AC and heating units, built at DeltaHacks 11. Uses an ESP8266 microcontroller and Grove temperature sensor to track real-time energy consumption and estimate electricity costs based on peak/off-peak pricing tiers. Features three user-selectable modes — Comfort, Eco, and Power Saving — alongside a web app for remote monitoring and a physical LCD display for direct interaction.',
    image: '/screenshots/iotherm/preview.png',
    badge: 'DeltaHacks 11',
  },
  {
    id: 5,
    title: 'Be The Hacker',
    date: '2025-01',
    endDate: null,
    language: 'JavaScript',
    additionalTech: 'React, Firebase, OpenAI API',
    github: 'https://github.com/oneDotpy/BeTheHacker',
    projectLink: '',
    description: 'A gamified cybersecurity education platform built with React, Firebase, and the OpenAI API. Teaches users cybersecurity awareness through interactive, scenario-based challenges with secure coding practices throughout.',
    image: '/screenshots/be-the-hacker/preview.png',
    badge: '',
  },
  {
    id: 8,
    title: 'Buddy Beacon',
    date: '2024-05',
    endDate: null,
    language: 'Python / Dart',
    additionalTech: 'Django REST Framework, Django Channels, WebSockets, Redis, Flutter, PostgreSQL, JWT',
    github: 'https://github.com/oneDotpy/buddy-beacon',
    projectLink: '',
    description: 'A peer-to-peer campus safety escort app for University of Toronto students. Students can find nearby buddies for late-night campus walks, with real-time GPS location sharing, in-session chat, and a one-tap emergency SOS that logs location and notifies Campus Safety. Backend built with Django REST Framework and Django Channels for Redis-backed WebSockets, JWT authentication, and a PostgreSQL database. Mobile app built with Flutter featuring OpenStreetMap integration, secure token storage, and a full post-session review system. Originally built in 24 hours at Moral Code Hackathon 2024, with continued solo development ongoing.',
    image: '/screenshots/buddy-beacon/preview.png',
    badge: '3rd Place · Moral Code Hackathon 2024',
  },
  {
    id: 6,
    title: 'VentureBound',
    date: '2024-11',
    endDate: '2024-11',
    language: 'Java',
    additionalTech: 'Firebase, OpenAI API',
    github: 'https://github.com/oneDotpy/VentureBound',
    projectLink: '',
    description: 'A real-time group chat app built with Java and Firebase for collaborative trip planning. Features an AI assistant powered by the OpenAI API that gathers preferences and generates structured travel recommendations.',
    image: '/screenshots/venturebound/preview.png',
    badge: '',
  },
]

const Project = () => {
  const [sortOption, setSortOption] = useState('date')
  const [dateFilter, setDateFilter] = useState('latest')
  const [languageFilter, setLanguageFilter] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const carouselRef = useRef(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  const toSortDate = (yyyymm) =>
    yyyymm ? new Date(yyyymm.replace(/-/g, '/')) : new Date('9999/12')

  const sortedProjects = [...projects]
    .filter((p) => languageFilter ? p.language === languageFilter : true)
    .sort((a, b) => {
      const endA = toSortDate(a.endDate)
      const endB = toSortDate(b.endDate)
      if (endA - endB !== 0) {
        return dateFilter === 'earliest' ? endA - endB : endB - endA
      }
      const startA = new Date(a.date.replace(/-/g, '/'))
      const startB = new Date(b.date.replace(/-/g, '/'))
      return dateFilter === 'earliest' ? startA - startB : startB - startA
    })

  const [showRightArrow, setShowRightArrow] = useState(sortedProjects.length > 1)

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  const handleNext = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' })
  }
  const handlePrev = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [dateFilter])

  useEffect(() => {
    if (sortOption === 'date') setLanguageFilter('')
    else if (sortOption === 'language') setDateFilter('latest')
  }, [sortOption])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1)
    }
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [sortedProjects])

  useEffect(() => {
    if (selectedProject) document.body.classList.add('modal-open')
    else document.body.classList.remove('modal-open')
  }, [selectedProject])

  return (
    <div className="project-section" id="project">
      <div className={`project-header animate ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
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
              {[...new Set(projects.map((p) => p.language))].map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="carousel-container">
        {showLeftArrow && (
          <button className="arrow left-arrow" onClick={handlePrev}>&#8592;</button>
        )}
        <div className="project-cards" ref={carouselRef}>
          {sortedProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <h3>{project.title}</h3>
              {project.badge && <span className="card-badge">{project.badge}</span>}
              <p className="card-date">{project.date}{project.endDate && project.endDate !== project.date ? ` – ${project.endDate}` : project.endDate === null ? ' – Present' : ''}</p>
              <p className="card-tech">{project.language}{project.additionalTech ? ` · ${project.additionalTech}` : ''}</p>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button className="arrow right-arrow" onClick={handleNext}>&#8594;</button>
        )}
      </div>

      {sortedProjects.length > 1 && (
        <div className="slide-hint">Swipe to explore more projects &rarr;</div>
      )}

      {selectedProject && (
        <div className="modal">
          <div className="modal-content-wrapper">
            <button className="close-button" onClick={closeModal}>&times;</button>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            )}
            <h2>{selectedProject.title}</h2>
            {selectedProject.badge && (
              <span className="modal-badge">{selectedProject.badge}</span>
            )}
            <p>{selectedProject.description}</p>
            <p className="modal-meta">Date: {selectedProject.date}{selectedProject.endDate && selectedProject.endDate !== selectedProject.date ? ` – ${selectedProject.endDate}` : selectedProject.endDate === null ? ' – Present' : ''}</p>
            <p className="modal-meta">Language: {selectedProject.language}</p>
            {selectedProject.additionalTech && (
              <p className="modal-meta">Tech: {selectedProject.additionalTech}</p>
            )}
            <div className="modal-buttons">
              {selectedProject.github && (
                <a href={selectedProject.github} className="modal-button" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {selectedProject.projectLink && (
                <a href={selectedProject.projectLink} className="modal-button" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project
