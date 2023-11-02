const express = require("express");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");
const EmpolyeeTicketsSearchRouter = express.Router();


EmpolyeeTicketsSearchRouter.get("/:key", async (req, res) => {
    try {
        const EmpolyeeTicket = await EmpolyeeTickets.find({
            "$or":[
                {project:{$regex:req.params.key}},
                {ticket_id:{$regex:req.params.key}},
                {assign_to:{$regex:req.params.key}},
                {ticket_followers:{$regex:req.params.key}},
                {client:{$regex:req.params.key}},
                {priority:{$regex:req.params.key}},
                {status:{$regex:req.params.key}},
                {description:{$regex:req.params.key}},
            ]
        })

        res.status(200).json({ message: "Success",EmpolyeeTicket});
        
    } catch (err) {
        res.status(400).json('error: ' + err);
    }

});

module.exports = EmpolyeeTicketsSearchRouter;