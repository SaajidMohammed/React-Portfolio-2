import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import './AddProjectPage.css';

const AddProjectPage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '', description: '', techStack: '', githubUrl: '', liveUrl: '',
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append('title', formData.title);
    dataToSend.append('description', formData.description);
    dataToSend.append('techStack', formData.techStack);
    dataToSend.append('githubUrl', formData.githubUrl);
    dataToSend.append('liveUrl', formData.liveUrl);
    dataToSend.append('image', imageFile);

    try {
      const response = await fetch('https://react-portfolio-2-k3sq.onrender.com/api/projects', {
        method: 'POST',
        body: dataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to add project');
      }

      alert('Project added successfully!');
      navigate('/projects');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <main className={`add-project-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="add-project-container">
        <h1 className="add-project-title">Add New Project</h1>
        <form className="add-project-form" onSubmit={handleSubmit}>
          <div className="form-group"><label htmlFor="title">Title</label><input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /></div>
          <div className="form-group"><label htmlFor="description">Description</label><textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows="4"></textarea></div>
          <div className="form-group"><label htmlFor="image">Project Image</label><input type="file" id="image" name="image" onChange={handleFileChange} required /></div>
          <div className="form-group"><label htmlFor="techStack">Tech Stack (comma-separated)</label><input type="text" id="techStack" name="techStack" value={formData.techStack} onChange={handleChange} placeholder="e.g., React, Node.js" required /></div>
          <div className="form-group"><label htmlFor="githubUrl">GitHub URL</label><input type="text" id="githubUrl" name="githubUrl" value={formData.githubUrl} onChange={handleChange} required /></div>
          <div className="form-group"><label htmlFor="liveUrl">Live Demo URL (Optional)</label><input type="text" id="liveUrl" name="liveUrl" value={formData.liveUrl} onChange={handleChange} /></div>
          <button type="submit" className="submit-button">Add Project</button>
        </form>
      </div>
    </main>
  );
};

export default AddProjectPage;
