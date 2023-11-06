const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allEmpolyeeAddRouter = express.Router();
const bcrypt = require("bcrypt");
const allEmployee_Joi_schema = require("../../models/all-empolyeeSchema/allEmoleeSchema_joi");

allEmpolyeeAddRouter.post("/", async (req, res) => {
    try { 
        const { error } = allEmployee_Joi_schema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const { First_Name, last_Name, User_Name, email, password, Confirm_Password,Company, Employee_ID, Mobile_No, Department, Designation, Joining_Date } = req.body;

        if (password !== Confirm_Password) {
            return res.status(400).send("Passwords do not match");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newEmployee = new allemployee({ 
            email,
            First_Name, // Corrected variable name
            last_Name,  // Corrected variable name
            User_Name,
            password: hashedPassword, // Store the hashed password
            Confirm_Password:hashedPassword,
            Employee_ID,
            Mobile_No,
            Department,
            Company,
            Designation,
            Joining_Date
        });

        // Use async/await for saving the user
        await newEmployee.save();
        
        res.status(201).json({ message: "Success", allEmpolyee: newEmployee });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "User already exists" });
      }
});

module.exports = allEmpolyeeAddRouter;
