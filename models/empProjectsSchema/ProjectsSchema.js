const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');



const ProjectSchema = new Schema({
    Project_Name: {
        type: String,
        required: true,
    },
    Client: {
        type: String,
        required: true,
    },
    Priority: {
        type: String,
        required: true,
    },
    Add_Project_Leader: {
        type: String,
        required: true,
    },
    Team_Members: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Upload_File: {
        type: String,
        required: true,
    },
    Rate: {
        type: Number,
        required: true,
    },
    Start_Date: {
        type: Date,
        default: Date.now,
    },
    end_Date: {
        type: Date,
        default: Date.now,
    }
});

const Project = mongoose.model('Project new', ProjectSchema);

module.exports = Project;
