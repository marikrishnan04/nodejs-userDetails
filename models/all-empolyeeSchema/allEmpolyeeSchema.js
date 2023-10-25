const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');



const allemployeeSchema = new Schema({
    First_Name: {
        type: String,
        required: true,
    },
    last_Name: {
        type: String,
        required: true,
    },
    User_Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    Confirm_Password: {
        type: String,
        required: true,
    },
    Employee_ID: {
        type: String,
        required: true,
    },
    Mobile_No: {
        type: Number,
        required: true,
    },
    Department: {
        type: String,
        required: true,
    },
    Designation: {
        type: String,
        required: true,
    },
    Joining_Date: {
        type: Date,
        default: Date.now,
    },

});

const allemployee = mongoose.model('allemployee', allemployeeSchema);

module.exports = allemployee;