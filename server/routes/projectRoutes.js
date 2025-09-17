const express = require("express");
const router = express.Router();
const multer = require("multer"); // New: Import multer
const { getProjects, createProject } = require("../controllers/projectController");

// New: Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // The destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    // Save the file with a unique name
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

router.get("/", getProjects);
router.post("/", upload.single('image'), createProject); // New: 'upload.single' middleware to handle image

module.exports = router;