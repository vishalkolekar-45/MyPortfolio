import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { useTheme } from './ThemeContext'
import Logo from './components/Logo'
import Footer from './components/Footer'

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <header>
        <Logo />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

