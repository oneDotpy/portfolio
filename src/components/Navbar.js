'use client'
import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'socials', label: 'Connect' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) window.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="navbar-right">
          <ThemeToggle />
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
