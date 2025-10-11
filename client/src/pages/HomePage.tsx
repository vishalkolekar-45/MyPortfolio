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
      <h1>Hi, I'm Your Name</h1>
      <p>Full‑stack developer specializing in React and Java.</p>
      <div style={{ marginTop: 16 }}>
        <h3>Featured Projects (from API)</h3>
        {error && <p style={{ color: 'crimson' }}>Failed to load: {error}</p>}
        {!projects && !error && <p>Loading…</p>}
        {projects && (
          <ul>
            {projects.map((p) => (
              <li key={p.id}>
                {p.name} — {p.stack.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
