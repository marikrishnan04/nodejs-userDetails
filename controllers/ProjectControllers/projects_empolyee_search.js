const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsSearchRouter = express.Router();


ProjectsSearchRouter.get("/", async (req, res) => {
    try {
        const Project = await Projects.find({
            "$or":[
                {Project_Name:{$regex:req.params.key}},
                {Client:{$regex:req.params.key}},
                {Priority:{$regex:req.params.key}},
                {Add_Project_Leader:{$regex:req.params.key}},
                {Team_Members:{$regex:req.params.key}},
                {Description:{$regex:req.params.key}},
                {Rate:{$regex:req.params.key}},
            ]
        })

        res.status(200).json({ message: "Success",Project});
        
    } catch (err) {
        res.status(400).json('error: ' + err);
    }

});

module.exports = ProjectsSearchRouter;