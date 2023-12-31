const employeeTicketsJoiSchema = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema_joi");
const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");

exports.empolyeeTicketsAdd=( async (req, res) => {
    try {
        const {  project,
            ticket_id,
            assign_to,
            ticket_followers,
            client,
            priority,
            status,
            attachment,
            description,
            create_date,} = req.body;
        
        const EmpolyeeTickets_employees = new EmpolyeeTickets({
            project,
            ticket_id,
            assign_to,
            ticket_followers,
            client,
            priority,
            status,
            attachment,
            description,
            create_date,
        });
        const { error } = employeeTicketsJoiSchema.validate(req.body);

        if (error) {
          return res.status(400).send(error.details[0].message);
        }

        const savedEmpolyeeTickets = await EmpolyeeTickets_employees.save();

        res.status(201).send({ message: "Success", EmpolyeeTickets: savedEmpolyeeTickets });
    } catch (err) {
        res.status(401).send({ error: "err" });
    }
});


