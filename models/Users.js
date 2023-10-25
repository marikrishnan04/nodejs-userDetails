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
        minlength: 3, // Corrected 'minlenght' to 'minlength'
        //' required: true
    },
    token: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        // Add email validation using Joi if needed
    }
}, { timestamps: true });

// Create a model based on the schema
const loginUsers = mongoose.model('user-emp', loginuserSchema);

module.exports = loginUsers;

// You can add Joi validation for your user data if needed, like this:
// const loginuserSchema = (user) => {
//     const schema = joi.object({
//         userName: joi.string().min(2).max(30).required(),
//         password: joi.string().min(3).required(),
//         token: joi.string(),
//         email: joi.string().email().required(),
//     });
//     return schema.validate(user);
// };
// module.exports.loginUsers = loginuserSchema;
