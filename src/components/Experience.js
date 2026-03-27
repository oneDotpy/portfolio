'use client'
import './Experience.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    id: 1,
    role: 'Webmaster',
    company: "University of Toronto Muslim Students' Association",
    location: 'Toronto, ON',
    date: 'Jul 2025 – Present',
    bullets: [
      'Migrated legacy website to Squarespace for long-term scalability, enabling future non-technical webmasters to manage content independently.',
      'Built custom Vue.js components embedded within Squarespace for dynamic, design-critical elements that require precise control beyond the CMS.',
      'Designed and implemented an event registration system modeled after an e-commerce checkout flow, with direct Square payment integration for seamless transaction processing.',
    ],
  },
  {
    id: 2,
    role: 'Lead Web Developer',
    company: 'Indonesian Community of Ontario (ICO)',
    location: 'Toronto, ON',
    date: 'Jan 2025 – Present',
    bullets: [
      "Led the migration from a static template to a full-stack end-to-end web platform, establishing ICO's first official digital presence.",
      'Built and deployed the full-stack platform using React, supporting dynamic content management for a growing community.',
      'Coordinated with organizational stakeholders to translate community needs into technical requirements and maintainable architecture.',
    ],
  },
  {
    id: 3,
    role: 'IT Associate',
    company: 'PERMIKA Toronto',
    location: 'Toronto, ON',
    date: 'Aug 2024 – Aug 2025',
    bullets: [
      'Established foundational IT systems supporting 500+ members, improving operational efficiency and reporting accuracy.',
      'Built a custom backend API integrating Google Sheets as a CMS, allowing non-technical team members to publish and update web content by editing a spreadsheet.',
      'Achieved a 200% increase in SEO performance through optimized structure, metadata, and content strategy, increasing organic visibility and member engagement.',
    ],
  },
  {
    id: 4,
    role: 'Business Development Manager',
    company: 'Pojokpodto — Student Podcasting Initiative',
    location: 'Toronto, ON',
    date: 'Feb 2024 – Present',
    bullets: [
      'Analyzed audience growth metrics and engagement trends to inform data-driven marketing strategy.',
      'Analyzed content performance data and delivered actionable insights to guide the team on content direction and promotion strategy.',
    ],
  },
]

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="experience-section" id="experience">
      <div className="experience-content" ref={ref}>
        <h2 className={`animate ${isVisible ? 'visible' : ''}`}>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`timeline-item animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-body">
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company} · {exp.location}</p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
