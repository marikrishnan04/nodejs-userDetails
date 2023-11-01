const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allEmpolyeeAddRouter = express.Router();
const allEmployee_Joi_schema = require("../../models/all-empolyeeSchema/allEmoleeSchema_joi");

allEmpolyeeAddRouter.post("/", async (req, res) => {
  try {
    const {
        First_Name,
        last_Name,
        User_Name,
        Email,
        password,
        Confirm_Password,
        Employee_ID,
        Mobile_No,
        Department,
        Designation,
        Joining_Date
    } = req.body;

    // Check if the password and Confirm_Password match
    if (password !== Confirm_Password) {
        return res.status(400).send("Passwords do not match");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const allEmployee = new allemployee({
        First_Name,
        last_Name,
        User_Name,
        Email,
        password: hashedPassword, // Store the hashed password
        Employee_ID,
        Mobile_No,
        Department,
        Designation,
        Joining_Date
    });

    const { error } = allEmployee_Joi_schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const savedEmployee = await allEmployee.save();

    res.status(201).json({ message: "Success", allEmployee: savedEmployee });
} catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
}

});

module.exports = allEmpolyeeAddRouter;

