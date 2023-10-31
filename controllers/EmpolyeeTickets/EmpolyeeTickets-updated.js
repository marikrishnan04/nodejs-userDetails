const express = require("express");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");
const EmpolyeeTicketsUpdateRouter = express.Router();

EmpolyeeTicketsUpdateRouter.patch("/:id", async (req, res) => {
    try {
        const EmpolyeeTickets_employees = await EmpolyeeTickets.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!EmpolyeeTickets_employees) {
            return res.status(404).json({ error: "EmpolyeeTickets not found" });
        }

        return res.status(200).json({ message: "Success", EmpolyeeTickets_employees });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = EmpolyeeTicketsUpdateRouter;