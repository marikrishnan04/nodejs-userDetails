const Clients = require("../../models/Clients/Clients_schema");
const Clients_joi = require("../../models/Clients/Clients_schema_joi");

exports.ClientsAdd=(async (req, res) => {
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

        res.status(201).send({ message: "Success", Clients: savedClients });
    } catch (err) {
        console.error(err);
        res.status(401).send({ error: "Client already exists" });
    }
});


