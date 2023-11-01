const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsviewRouter = express.Router();


ProjectsviewRouter.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
    const perPage = 10; // Set the number of items per page

    // Sort the Projects collection by the 'employee' field in ascending order
    const Projectss = await Projects.find()
        .sort({ employee: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.status(200).json(Projectss);
} catch (err) {
    res.status(400).json('error: ' + err);
}

});

module.exports = ProjectsviewRouter;