const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");

exports.allemployeeUpadated=( async (req, res) => {
    try {
        const allemployee_employees = await allemployee.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!allemployee_employees) {
            return res.status(404).send({ error: "allemployee not found" });
        }

        return res.status(200).send({ message: "Success", allemployee_employees });
    } catch (err) {
        console.error(err);
        res.status(401).send({ error: "err" });
    }
});

