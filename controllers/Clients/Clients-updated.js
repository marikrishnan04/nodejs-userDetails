const Clients = require("../../models/Clients/Clients_schema");

exports.ClientsUpdated=(async (req, res) => {
    try {
        const Clientss_employees = await Clients.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!Clientss_employees) {
            return res.status(404).send({ error: "Clientss not found" });
        }

        return res.status(200).send({ message: "Success", Clientss_employees });
    } catch (err) {
        res.status(401).send({ error: "err" });
    }
});

