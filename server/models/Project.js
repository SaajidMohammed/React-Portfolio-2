// server/models/Project.js
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    techStack: { type: [String], required: true },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project; // <-- Make sure this line is correct