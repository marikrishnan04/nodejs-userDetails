const EmpolyeeTickets = require("../../models/EmpolyeeTicketsSchema/EmpolyeeTicketsSchema");

exports.empolyeeTicketsDeleted=( async (req, res) => {
    try {
        const deletedEmpolyeeTickets = await EmpolyeeTickets.findByIdAndDelete({_id:req.params.id});
        if (!deletedEmpolyeeTickets) {
            return res.status(404).send({ error: "EmpolyeeTickets doesn't exist!" });
        }
        return res.status(200).send({ message: "Deleted EmpolyeeTickets" });
    } catch (error) {
        console.error(error);
        res.status(401).send({ error: "err" });
    }
});

