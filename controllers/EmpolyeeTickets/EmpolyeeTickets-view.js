const express = require("express");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");
const EmpolyeeTicketsviewRouter = express.Router();


EmpolyeeTicketsviewRouter.get("/", async (req, res) => {
    try {
        const users = await EmpolyeeTickets.find();
        res.json(users);
      } catch (err) {
        res.status(400).json('Error: ' + err);
      }
});

module.exports = EmpolyeeTicketsviewRouter;