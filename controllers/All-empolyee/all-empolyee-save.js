const express = require("express");
const allemployee = require("../../models/all-employeeSchema/allEmployeeSchema");
const bcrypt = require("bcrypt"); // Import the bcrypt library
const allEmpolyeeAddRouter = express.Router();
const allEmployee_Joi_schema = require("../../models/all-employeeSchema/allEmployeeSchema_joi");

allEmpolyeeAddRouter.post("/", async (req, res) => {
    try {
        const {
            First_Name,
            Last_Name, // Corrected variable name to match the schema
            User_Name,
            Email,
            password,
            Confirm_Password, // Corrected variable name to match the schema
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

        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new employee instance with the hashed password
        const allEmployee = new allemployee({
            First_Name,
            Last_Name,
            User_Name,
            Email,
            password: hashedPassword, // Store the hashed password
            Employee_ID,
            Mobile_No,
            Department,
            Designation,
            Joining_Date
        });

        // Validate the employee data using a Joi schema (assuming you have defined it correctly)
        const { error } = allEmployee_Joi_schema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Save the new employee to the database
        const savedEmployee = await allEmployee.save();

        res.status(201).json({ message: "Employee added successfully", allEmployee: savedEmployee });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = allEmpolyeeAddRouter;
