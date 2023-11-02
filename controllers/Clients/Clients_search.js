const express = require("express");
const Clients = require("../../models/Clients/Clients_schema");
const ClientsSearchRouter = express.Router();


ClientsSearchRouter.get("/:key", async (req, res) => {
    try {
        const Client = await Clients.find({
            "$or":[
                {client_name:{$regex:req.params.key}},
                {client_email:{$regex:req.params.key}},
                {client_company:{$regex:req.params.key}},
                {client_mobilenumber:{$regex:req.params.key}},
                {client_address:{$regex:req.params.key}},
                {date:{$regex:req.params.key}},
            ]
        })

        res.status(200).json({ message: "Success",Client});
        
    } catch (err) {
        res.status(400).json('error: ' + err);
    }
});

module.exports = ClientsSearchRouter;


