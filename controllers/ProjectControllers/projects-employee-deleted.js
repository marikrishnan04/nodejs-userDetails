const Projects = require("../../models/empProjectsSchema/ProjectsSchema");

exports.ProjectsDelete=( async (req, res) => {
    try {
        const deletedProjects = await Projects.findByIdAndDelete({_id:req.params.id});
        if (!deletedProjects) {
            return res.status(404).send({ error: "Projects doesn't exist!" });
        }
        return res.status(200).send({ message: "Deleted Projects" });
    } catch (error) {
        res.status(401).send({ error: "err" });
    }
});

