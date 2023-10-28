const express = require("express");
const Clients = require("../../models/Clients/Clients_schema");
const ClientsviewRouter = express.Router();


ClientsviewRouter.get("/", async (req, res) => {
    try {
        const users = await Clients.find();
        res.json(users);
      } catch (err) {
        res.status(400).json('Error: ' + err);
      }
});

module.exports = ClientsviewRouter;