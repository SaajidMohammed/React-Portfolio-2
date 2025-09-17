import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, techStack, githubUrl, liveUrl }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} project screenshot`} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;