const express = require("express");
const Clients = require("../../models/Clients/Clients_schema");
const ClientsSearchRouter = express.Router();

ClientsSearchRouter.get("/:key", async (req, res) => {
    try {
        const { key } = req.query; // Use query parameter instead of route parameter

        if (!key) {
            return res.status(400).json({ message: "Search key is required" });
        }

        const Client = await Clients.find({
            $or: [
                { client_name: { $regex: key, $options: "i" } }, // Use case-insensitive regex
                { client_email: { $regex: key, $options: "i" } },
                { client_company: { $regex: key, $options: "i" } },
                { client_mobilenumber: { $regex: key, $options: "i" } },
                { client_address: { $regex: key, $options: "i" } },
                { date: { $regex: key, $options: "i" } },
            ]
        });

        res.status(200).json({ message: "Success", Client });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = ClientsSearchRouter;
