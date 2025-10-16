import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  demoLink,
  codeLink
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card-tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-card-links">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-card-link demo">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-card-link code">
              <i className="fab fa-github"></i> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;