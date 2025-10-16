import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: vishal.kolekar@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Location: Mumbai, India</p>
        </div>
        
        <div className="footer-section">
          <h3>Social Links</h3>
          <div className="social-links">
            <a href="https://github.com/vishalkolekar-45" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
            <a href="/projects">Projects</a>
            <a href="/experience">Experience</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vishal Kolekar. All rights reserved.</p>
        <p>Made with ❤️ using React & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;