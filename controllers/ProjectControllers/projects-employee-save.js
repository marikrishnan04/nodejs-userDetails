const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const Emp_projectsSchema_joi = require("../../models/empProjectsSchema/Emp_projectsSchema_joi");
const ProjectsAddRouter = express.Router();

ProjectsAddRouter.post("/", async (req, res) => {
    try {
        const {Project_Name,Client,Priority,Add_Project_Leader,Team_Members,Upload_File,Description,Rate,Start_Date,end_Date } = req.body;
        
        const Projects_employees = new Projects({
            Project_Name,
            Client,
            Priority,
            Add_Project_Leader,
            Team_Members,
            Description,
            Upload_File,
            Rate,
            Start_Date,
            end_Date
        });
        const { error } = Emp_projectsSchema_joi.validate(req.body);

        if (error) {
          return res.status(400).send(error.details[0].message);
        }

        const savedProjects = await Projects_employees.save();

        res.status(201).json({ message: "Success", Projects: savedProjects });
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "err" });
    }
});

module.exports = ProjectsAddRouter;

