const mongoose = require('mongoose');

// Create a Mongoose model for files
const File = mongoose.model('File', {
    name: String,
    path: String,
  });

  module.exports=File