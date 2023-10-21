const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsviewRouter = express.Router();


ProjectsviewRouter.get("/", async (req, res) => {
    try {
        const users = await Projects.find();
        res.json(users);
      } catch (err) {
        res.status(400).json('Error: ' + err);
      }
});

module.exports = ProjectsviewRouter;