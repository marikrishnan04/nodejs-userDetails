const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsdeletedRouter = express.Router();

ProjectsdeletedRouter.delete("/:id", async (req, res) => {
    try {
        const deletedProjects = await Projects.findByIdAndDelete({_id:req.params.id});
        if (!deletedProjects) {
            return res.status(404).json({ error: "Projects doesn't exist!" });
        }
        return res.status(200).json({ message: "Deleted Projects" });
    } catch (error) {
        res.status(401).json({ error: "err" });
    }
});

module.exports = ProjectsdeletedRouter;