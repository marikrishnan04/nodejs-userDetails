const Clients = require("../../models/Clients/Clients_schema");

exports.ClientsDelete=( async (req, res) => {
    try {
        const deletedClients = await Clients.findByIdAndDelete({_id:req.params.id});
        if (!deletedClients) {
            return res.status(404).send({ error: "Clients doesn't exist!" });
        }
        return res.status(200).send({ message: "Deleted Clients" });
    } catch (error) {
        console.error(error);
        res.status(401).send({ error: "err" });
    }
});

