const express = require("express");
const Clients = require("../../models/Clients/Clients_schema");
const Clients_joi = require("../../models/Clients/Clients_schema_joi");
const ClientsAddRouter = express.Router();

ClientsAddRouter.post("/", async (req, res) => {
    try {
        const { 
            client_name ,
            client_email ,
            client_company ,
            client_mobilenumber ,
            client_address ,
            date ,
            } = req.body;
        
        const Clients_employees = new Clients({
            client_name ,
            client_email ,
            client_company ,
            client_mobilenumber ,
            client_address ,
            date ,
        });
        const { error } = Clients_joi.validate(req.body);

        if (error) {
          return res.status(400).send(error.details[0].message);
        }

        const savedClients = await Clients_employees.save();

        res.status(201).json({ message: "Success", Clients: savedClients });
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "Client already exists" });
    }
});

module.exports = ClientsAddRouter;

