const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const Emp_projectsSchema_joi = require("../../models/empProjectsSchema/Emp_projectsSchema_joi");

exports.ProjectsAdd=( async (req, res) => {
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

        res.status(201).send({ message: "Success", Projects: savedProjects });
    } catch (err) {
        console.error(err);
        res.status(401).send({ error: "err" });
    }
});


