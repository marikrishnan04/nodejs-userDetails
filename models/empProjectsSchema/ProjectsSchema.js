const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');





const ProjectSchema = new Schema({
        Project_Name: joi.string().required(),
        Client: joi.string().required(),
        Priority: joi.string().required(),
        Add_Project_Leader: joi.string().required(),
        Team_Members: joi.string().required(),
        Description: joi.string().required(),
        Upload_File: joi.string().required(),
        Rate: joi.required(),
        Start_Date:{
            type: Date,
            default: Date.now,

        },
        end_Date:{
            type: Date,
            default: Date.now,

        }
       
});
const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;