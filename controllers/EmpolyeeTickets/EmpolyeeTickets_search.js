const express = require("express");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");
const EmpolyeeTicketsSearchRouter = express.Router();

EmpolyeeTicketsSearchRouter.get("/:key", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
        const perPage = 10; // Set the number of items per page

        // Use the 'key' route parameter for searching
        const key = req.params.key;
        
        // Construct a query to search for employee tickets containing the 'key'
        const query = {
            $or: [
                { project: { $regex: key, $options: "i" } },
                { ticket_id: { $regex: key, $options: "i" } },
                { assign_to: { $regex: key, $options: "i" } },
                { ticket_followers: { $regex: key, $options: "i" } },
                { client: { $regex: key, $options: "i" } },
                { priority: { $regex: key, $options: "i" } },
                { status: { $regex: key, $options: "i" } },
                { description: { $regex: key, $options: "i" } },
            ]
        };

        // Perform the search with pagination
        const employeeTickets = await EmpolyeeTickets
            .find(query)
            .sort({ project: 1 }) // Sort by the project (you can change this)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json({ message: "Success", employeeTickets });
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return a structured error response
    }
});

module.exports = EmpolyeeTicketsSearchRouter;
