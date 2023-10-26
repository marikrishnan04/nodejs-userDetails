const express = require("express");
const loginUsersdeletedRouter = express.Router();
const loginUsers = require("../models/Users");


loginUsersdeletedRouter.delete("/:id", async (req, res) => {
    console.log(req.params);
    try {
        const deletedloginUsers = await loginUsers.findByIdAndDelete({_id:req.params.id});
        if (!deletedloginUsers) {
            return res.status(404).json({ error: "loginUsers doesn't exist!" });
        }
        return res.status(200).json({ message: "Deleted loginUsers" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = loginUsersdeletedRouter;