const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allemployeeviewRouter = express.Router();

allemployeeviewRouter.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
        const perPage = 10; // Set the number of items per page

        // Sort the allemployee collection by the 'employee' field in ascending order
        const employees = await allemployee.find()
            .sort({ employee: 1 })
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json(employees);
    } catch (err) {
        res.status(400).json('error: ' + err);
    }
});

module.exports = allemployeeviewRouter;
