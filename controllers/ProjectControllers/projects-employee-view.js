const Projects = require("../../models/empProjectsSchema/ProjectsSchema");


exports.ProjectsList=( async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
    const perPage = 10; // Set the number of items per page

    // Sort the Projects collection by the 'employee' field in ascending order
    const Projectss = await Projects.find()
        .sort({ employee: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.status(200).send(Projectss);
} catch (err) {
    res.status(400).send('error: ' + err);
}

});

