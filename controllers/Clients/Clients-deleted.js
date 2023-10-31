const express = require("express");
const Clients = require("../../models/Clients/Clients_schema");
const ClientsdeletedRouter = express.Router();

ClientsdeletedRouter.delete("/:id", async (req, res) => {
    try {
        const deletedClients = await Clients.findByIdAndDelete({_id:req.params.id});
        if (!deletedClients) {
            return res.status(404).json({ error: "Clients doesn't exist!" });
        }
        return res.status(200).json({ message: "Deleted Clients" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = ClientsdeletedRouter;