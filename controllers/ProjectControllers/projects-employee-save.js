const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsAddRouter = express.Router();

ProjectsAddRouter.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const {Project_Name,Client,Priority,Add_Project_Leader,Team_Members,Description,Upload_File,Rate,Start_Date,end_Date } = req.body;
        
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

        const savedProjects = await Projects_employees.save();

        res.status(201).json({ message: "Success", Projects: savedProjects });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = ProjectsAddRouter;

