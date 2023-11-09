const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');

// Define the user schema
const loginuserSchema = new Schema({
    Repeat_Password:{
        type: String,
        minlength: 3, // Corrected 'minlenght' to 'minlength'
        //' required: true
    },
    password: {
        type: String,
        minlength: 8, // Corrected 'minlenght' to 'minlength'
        //' required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    }
}, { timestamps: true });

// Create a model based on the schema
const loginUsers = mongoose.model('hrms', loginuserSchema);

module.exports = loginUsers;


