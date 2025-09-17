import React from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import './HomePage.css';
import profilePic from '../../assets/profile-image.jpg'; // Make sure to add your image here

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <main className={`homepage ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="homepage-content">
        <div className="text-content">
          <h1 className="title">Hi, I'm Md Saajid 👋</h1>
          <h2 className="subtitle">Full-Stack Developer</h2>
          <p className="description">
            I'm a passionate developer specializing in building modern web applications with a focus on clean code and user experience.
          </p>
          <Link to="/contact" className="cta-button">
            Let's Connect
          </Link>
        </div>
        <div className="image-content">
          <img src={profilePic} alt="John Doe's profile" className="profile-pic" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;