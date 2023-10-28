const express = require("express");
const Clients = require("../../models/Clients/Clients_schema");
const ClientssUpdateRouter = express.Router();

ClientssUpdateRouter.put("/:id", async (req, res) => {
    console.log(req.body);
    try {
        const Clientss_employees = await Clients.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!Clientss_employees) {
            return res.status(404).json({ error: "Clientss not found" });
        }

        return res.status(200).json({ message: "Success", Clientss_employees });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = ClientssUpdateRouter;