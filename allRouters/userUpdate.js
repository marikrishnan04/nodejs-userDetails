const express = require("express");
const loginUsersUpdateRouter = express.Router();
const Users = require("../models/Users"); // Correct model name

loginUsersUpdateRouter.put("/:id", async (req, res) => {
    console.log(req.body);
    try {
        const loginUsers_employees = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!loginUsers_employees) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ message: "Success", loginUsers_employees });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = loginUsersUpdateRouter;
