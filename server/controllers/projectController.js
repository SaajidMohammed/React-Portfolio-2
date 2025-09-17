const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// New: `req.file` now contains the uploaded file info
const createProject = async (req, res) => {
  const { title, description, techStack, githubUrl, liveUrl } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null; // Get the file path

  try {
    const newProject = new Project({
      title,
      description,
      image,
      techStack: techStack.split(','), // Split comma-separated string into an array
      githubUrl,
      liveUrl,
    });
    const createdProject = await newProject.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProjects, createProject };