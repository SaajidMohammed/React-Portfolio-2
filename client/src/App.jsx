import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AddProjectPage from './pages/AddProjectPage/AddProjectPage';

import useTheme from './hooks/useTheme';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/add-project" element={<AddProjectPage />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;