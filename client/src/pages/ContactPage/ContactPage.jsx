import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // This is where you would make an API call to your backend
    // For a MERN stack, you would use a library like Axios or the built-in fetch
    //
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     alert('Message sent successfully!');
    //     setFormData({ name: '', email: '', message: '' });
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     alert('Failed to send message.');
    //   });
  };

  return (
    <main className={`contact-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Or Find Me Here</h2>
          <p className="email-link">
            <FaEnvelope /> <a href="mailto:saajidmohammed6@example.com">saajidmohammed6@example.com</a>
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;