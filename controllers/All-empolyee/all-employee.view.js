const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allemployeeviewRouter = express.Router();


allemployeeviewRouter.get("/", async (req, res) => {
    try {
        const users = await allemployee.find();
        res.json(users);
      } catch (err) {
        res.status(400).json('Error: ' + err);
      }
});

module.exports = allemployeeviewRouter;