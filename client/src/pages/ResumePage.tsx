import { useState } from 'react';
import './ResumePage.css';
import { useTheme } from '../ThemeContext';

const ResumePage = () => {
  const [printableMode, setPrintableMode] = useState(false);
  const { theme } = useTheme();
  
  const handlePrint = () => {
    setPrintableMode(true);
    setTimeout(() => {
      window.print();
      setPrintableMode(false);
    }, 100);
  };

  const handleDownload = () => {
    // In a real implementation, you would either:
    // 1. Generate a PDF from the current page content
    // 2. Download a pre-made PDF file
    
    // For this example, we'll simulate downloading a PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the path to your actual PDF
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`resume-container ${printableMode ? 'printable-mode' : theme}`}>
      <div className="resume-header">
        <h1>VISHAL KOLEKAR</h1>
        <div className="resume-actions">
          <button className="print-button" onClick={handlePrint}>
            Print Resume
          </button>
          <button className="download-button" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
      </div>

      <div className="resume-section">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:vk3715591@gmail.com">vk3715591@gmail.com</a></p>
        <p>Phone: +91-9784786139</p>
        <p>Location: Pune, India</p>
      </div>

      <div className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Full Stack Developer with 1.5+ years of hands-on experience in designing, developing, and deploying
          end-to-end web applications using Java, Spring Boot, Hibernate, and modern frontend frameworks like
          Angular and React. Proficient in developing RESTful APIs, integrating databases, and building responsive user
          interfaces. Experienced in Agile/Scrum environments, version control using Git, and performance
          optimization. Committed to writing clean, testable, and maintainable code to deliver efficient software
          solutions.
        </p>
      </div>

      <div className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <span className="skill-tag">Java</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Python (Basic)</span>
          <span className="skill-tag">Spring Boot</span>
          <span className="skill-tag">Hibernate</span>
          <span className="skill-tag">JPA</span>
          <span className="skill-tag">JDBC</span>
          <span className="skill-tag">JSP/Servlets</span>
          <span className="skill-tag">HTML/CSS</span>
          <span className="skill-tag">Angular</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Docker</span>
          <span className="skill-tag">Maven</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">JIRA</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">NPM</span>
          <span className="skill-tag">Agile/Scrum</span>
        </div>
      </div>

      <div className="resume-section">
        <h2>Work Experience</h2>
        
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">YOUNGLEVER INDIA PVT LTD</span>
            <span className="resume-item-date">Apr 2024 - Present</span>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2>Project</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Barclays Bank – Investment Banking Platform</span>
          </div>
          <p><strong>Project Description:</strong> Developing and maintaining a full-stack financial platform to manage equity derivatives and trading workflows for Barclays Bank. The solution involved building RESTful microservices and Spring Boot applications with interactive dashboards and transaction management for financial reporting.</p>
          
          <p><strong>Tools & Technologies:</strong> Java, Spring Boot, Hibernate, JPA, REST API, Angular, HTML5, CSS3, TypeScript, Oracle, Maven, Git, Postman, JIRA, IntelliJ IDEA</p>
          
          <p><strong>Key Responsibilities:</strong></p>
          <ul>
            <li>Developed and maintained RESTful microservices using Spring Boot and Hibernate.</li>
            <li>Built Angular-based, responsive UI components in Angular to visualize real-time financial data.</li>
            <li>Integrated frontend and backend via RESTful APIs, ensuring seamless data flow.</li>
            <li>Collaborated with UI/UX teams to design user-friendly dashboards and transaction modules.</li>
            <li>Designed and implemented database models and queries for financial data.</li>
            <li>Used Git for version control and JIRA for sprint tracking and issue management.</li>
            <li>Conducted code reviews, implemented best coding practices, and performed unit testing (JUnit).</li>
            <li>Participated in Agile ceremonies (sprint planning, stand-ups, retrospectives) to ensure timely delivery.</li>
            <li>Supported production deployments and resolved issues under tight SLAs.</li>
            <li>Created and maintained API documentation, deployment scripts, and process manuals.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Bachelor of Computer Science (BCS)</span>
            <span className="resume-item-date">2015</span>
          </div>
          <p>Punyashlok Ahilyadevi Holkar Solapur University</p>
        </div>
        
        <div className="resume-item">
          <p><strong>Additional Information:</strong></p>
          <ul>
            <li><strong>Availability:</strong> Immediate / As per Notice Period</li>
            <li><strong>Languages:</strong> English, Hindi, Marathi</li>
            <li><strong>Areas of Interest:</strong> Full Stack Development, REST API Integration, Cloud Deployment, Microservices Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;