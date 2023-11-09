const express = require("express");
const loginUsersdeletedRouter = express.Router();
const loginUsers = require("../models/Users");


exports.UserDeleted=( async (req, res) => {
    try {
        const deletedloginUsers = await loginUsers.findByIdAndDelete({_id:req.params.id});
        if (!deletedloginUsers) {
            return res.status(404).send({ error: "loginUsers doesn't exist!" });
        }
        return res.status(200).send({ message: "Deleted loginUsers" });
    } catch (error) {
        res.status(500).send( error );
    }
});

