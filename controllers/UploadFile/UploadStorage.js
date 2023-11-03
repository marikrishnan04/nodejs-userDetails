const multer = require('multer');
const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const uploadFiles = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Create a Mongoose model for files
const File = mongoose.model('File', {
  name: String,
  path: String,
});

uploadFiles.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Save file information to MongoDB
    const file = new File({
      name: req.file.originalname,
      path: req.file.path,
    });
    await file.save();

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).send('File upload and save process failed.');
  }
});

module.exports = uploadFiles;
