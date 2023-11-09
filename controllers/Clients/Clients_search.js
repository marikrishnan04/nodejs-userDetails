const Clients = require("../../models/Clients/Clients_schema");

exports.ClientsSearch=( async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
        const perPage = 10; // Set the number of items per page

        // Use the 'key' route parameter for searching
        const key = req.params.key;
        
        // Construct a query to search for clients containing the 'key'
        const query = {
            $or: [
                { client_name: { $regex: key, $options: "i" } },
                { client_email: { $regex: key, $options: "i" } },
                { client_company: { $regex: key, $options: "i" } },
                { client_mobilenumber: { $regex: key, $options: "i" } },
                { client_address: { $regex: key, $options: "i" } },
            ]
        };

        // Perform the search with pagination
        const clients = await Clients
            .find(query)
            .sort({ client_name: 1 }) // Sort by the client name (you can change this)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).send({ message: "Success", clients });
    } catch (err) {
        res.status(500).send({ error: err.message }); // Return a structured error response
    }
});

