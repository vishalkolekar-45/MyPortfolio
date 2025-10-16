import { useEffect, useState } from 'react'
import './pages.css'

type Project = { id: number; name: string; stack: string[] }

export default function HomePage() {
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.statusText))))
      .then((data: Project[]) => setProjects(data))
      .catch((e: Error) => setError(e.message))
  }, [])

  return (
    <section>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Vishal Kolekar</h1>
          <p className="hero-subtitle">
            Full‑stack developer specializing in React, TypeScript, and Java.<br />
            Passionate about building beautiful, performant web apps and scalable backend systems.
          </p>
          <div className="skills-container">
            <span className="skill-badge">React</span>
            <span className="skill-badge">TypeScript</span>
            <span className="skill-badge">Java</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Vite</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">Spring Boot</span>
            <span className="skill-badge">SQL</span>
          </div>
          <a href="/resume" className="hero-cta">View Resume</a>
        </div>
    <div className="hero-image" aria-hidden="true"></div>
      </div>
      <div style={{ marginTop: 32 }}>
        <h2>About Me</h2>
        <p>
          I love solving real-world problems with code and collaborating with creative teams. My experience spans frontend and backend development, UI/UX design, and cloud deployment. I enjoy learning new technologies and sharing knowledge with the community.
        </p>
      </div>
      <div style={{ marginTop: 32 }}>
        <h2>Featured Projects</h2>
        {error && <p style={{ color: 'crimson' }}>Failed to load: {error}</p>}
        {!projects && !error && <p>Loading…</p>}
        {projects && (
          <ul>
            {projects.map((p) => (
              <li key={p.id}>
                <strong>{p.name}</strong> — <span>{p.stack.join(', ')}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

