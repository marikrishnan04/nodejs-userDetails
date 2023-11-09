const Clients = require("../../models/Clients/Clients_schema");


exports.ClientsList=( async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
    const perPage = 10; // Set the number of items per page

    // Sort the Clients collection by the 'employee' field in ascending order
    const Clientss = await Clients.find()
        .sort({ employee: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.status(200).send(Clientss);
} catch (err) {
    res.status(400).send('error: ' + err);
}
});



