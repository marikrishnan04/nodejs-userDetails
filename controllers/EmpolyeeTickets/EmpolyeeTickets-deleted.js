const express = require("express");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");
const EmpolyeeTicketsdeletedRouter = express.Router();

EmpolyeeTicketsdeletedRouter.delete("/:id", async (req, res) => {
    try {
        const deletedEmpolyeeTickets = await EmpolyeeTickets.findByIdAndDelete({_id:req.params.id});
        if (!deletedEmpolyeeTickets) {
            return res.status(404).json({ error: "EmpolyeeTickets doesn't exist!" });
        }
        return res.status(200).json({ message: "Deleted EmpolyeeTickets" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = EmpolyeeTicketsdeletedRouter;