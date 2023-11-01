const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allemployeeUpdateRouter = express.Router();

allemployeeUpdateRouter.patch("/:id", async (req, res) => {
    try {
        const allemployee_employees = await allemployee.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!allemployee_employees) {
            return res.status(404).json({ error: "allemployee not found" });
        }

        return res.status(200).json({ message: "Success", allemployee_employees });
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "err" });
    }
});

module.exports = allemployeeUpdateRouter;