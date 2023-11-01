const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allemployeedeletedRouter = express.Router();

allemployeedeletedRouter.delete("/:id", async (req, res) => {
    try {
        const deletedallemployee = await allemployee.findByIdAndDelete({_id:req.params.id});
        if (!deletedallemployee) {
            return res.status(404).json({ error: "allemployee doesn't exist!" });
        }
        return res.status(200).json({ message: "Deleted allemployee" });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "err" });
    }
});

module.exports = allemployeedeletedRouter;