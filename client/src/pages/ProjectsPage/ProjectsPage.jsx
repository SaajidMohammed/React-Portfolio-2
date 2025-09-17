import React, { useState, useEffect } from 'react';
import useTheme from '../../hooks/useTheme';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const { isDarkMode } = useTheme();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://react-portfolio-2-k3sq.onrender.com/api/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <main className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
        <h1 className="projects-title">Loading Projects...</h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
        <h1 className="projects-title">Error: {error}</h1>
      </main>
    );
  }

  return (
    <main className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                image={`http://localhost:5000${project.image}`}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))
          ) : (
            <h2 className="no-projects">No projects found. Add one from your backend!</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
