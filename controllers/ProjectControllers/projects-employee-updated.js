const express = require("express");
const Projects = require("../../models/empProjectsSchema/ProjectsSchema");
const ProjectsUpdateRouter = express.Router();

ProjectsUpdateRouter.patch("/:id", async (req, res) => {
    try {
        const Projects_employees = await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!Projects_employees) {
            return res.status(404).json({ error: "Projects not found" });
        }

        return res.status(200).json({ message: "Success", Projects_employees });
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "err" });
    }
});

module.exports = ProjectsUpdateRouter;