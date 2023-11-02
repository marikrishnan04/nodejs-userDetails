const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allemployeesearchRouter = express.Router();

allemployeesearchRouter.get("/:key", async (req, res) => {
    try {
        const employees = await allemployee.find({
            "$or": [
                { First_Name: { $regex: req.params.key, } },
                { last_Name: { $regex: req.params.key } },
                { User_Name: { $regex: req.params.key } },
                { email: { $regex: req.params.key } },
                { Employee_ID: { $regex: req.params.key } },
                { Department: { $regex: req.params.key } },
                { Designation: { $regex: req.params.key } },
            ]
        })

        res.status(200).json({ message: "Success", employees });
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return a structured error response
    }
});

module.exports = allemployeesearchRouter;
