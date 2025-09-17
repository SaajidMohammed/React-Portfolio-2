import React from 'react';
import useTheme from '../../hooks/useTheme';
import './AboutPage.css';

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js',
    'MongoDB', 'Python', 'Django', 'RESTful APIs', 'Git', 'Redux'
  ];

  return (
    <main className={`about-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <section className="about-section">
          <p>
            Hello! I'm Mohammed Saajid, a passionate full-stack developer with a knack for building intuitive and responsive web applications. My journey into the world of web development began with a curiosity for how things work on the internet. This led me to master technologies from both the frontend and backend, allowing me to build complete, scalable solutions.
          </p>
          <p>
            My experience ranges from developing dynamic user interfaces with **React** to building robust, server-side APIs with **Node.js** and **Express.js**. I am always eager to learn new technologies and improve my skills to stay on the cutting edge of the industry.
          </p>
        </section>

        <section className="skills-section">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">My Journey</h2>
          <p>
            I believe that the best code is written with a clear understanding of the business problem and a strong focus on the user experience. I enjoy collaborating with teams to turn complex challenges into simple, elegant solutions. When I'm not coding, you can find me exploring new hiking trails or contributing to open-source projects.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;