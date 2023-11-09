
const Users = require("../models/Users"); // Correct model name
const Joi = require("joi");
const bcrypt = require("bcrypt"); // Import bcrypt

exports.UserUpdated=( async (req, res) => {
    try {
        const schema = Joi.object({
            Repeat_Password: Joi.string().required(),
            password: Joi.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const { password, Repeat_Password } = req.body;

        if (password !== Repeat_Password) {
            return res.status(400).send("Passwords do not match");
        }

        // Use async/await to update the user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Use async/await to update the user's password in the database
        const loginUsers_employees = await Users.findByIdAndUpdate(
            req.params.id,
            { password: hashedPassword }, // Update the password
            { new: true }
        );

        if (!loginUsers_employees) {
            return res.status(404).send({ error: "User not found" });
        }

        return res.status(200).send({ message: "Password updated successfully", loginUsers_employees });
    } catch (err) {
        res.status(500).send( err);
    }
});

