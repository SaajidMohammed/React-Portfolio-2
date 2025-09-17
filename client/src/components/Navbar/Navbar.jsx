import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './Navbar.css';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Name */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="My Portfolio" />
          My Portfolio
        </Link>
        {/* Mobile menu toggle button */}
        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>
        {/* Navigation links */}
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
          {/* This link is now always visible */}
          <li className="nav-item add-project-link">
            <Link to="/add-project" className="nav-links" onClick={closeMobileMenu}>Add Project</Link>
          </li>
          <li className="nav-item toggle-item">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;