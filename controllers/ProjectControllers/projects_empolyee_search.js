const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsSearchRouter = express.Router();

ProjectsSearchRouter.get("/:key", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
        const perPage = 10; // Set the number of items per page

        // Use the 'key' route parameter for searching
        const key = req.params.key;
        
        // Construct a query to search for projects containing the 'key'
        const query = {
            $or: [
                { Project_Name: { $regex: key, $options: "i" } },
                { Client: { $regex: key, $options: "i" } },
                { Priority: { $regex: key, $options: "i" } },
                { Add_Project_Leader: { $regex: key, $options: "i" } },
                { Team_Members: { $regex: key, $options: "i" } },
                { Description: { $regex: key, $options: "i" } },
            ]
        };

        // Perform the search with pagination
        const projects = await Projects
            .find(query)
            .sort({ Project_Name: 1 }) // Sort by the project name (you can change this)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json({ message: "Success", projects });
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return a structured error response
    }
});

module.exports = ProjectsSearchRouter;
