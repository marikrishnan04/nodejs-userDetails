const express = require("express");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");
const EmpolyeeTicketsviewRouter = express.Router();


EmpolyeeTicketsviewRouter.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
    const perPage = 10; // Set the number of items per page

    // Sort the EmpolyeeTickets collection by the 'employee' field in ascending order
    const EmpolyeeTicketss = await EmpolyeeTickets.find()
        .sort({ employee: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.status(200).json(EmpolyeeTicketss);
} catch (err) {
    res.status(400).json('error: ' + err);
}

});

module.exports = EmpolyeeTicketsviewRouter;