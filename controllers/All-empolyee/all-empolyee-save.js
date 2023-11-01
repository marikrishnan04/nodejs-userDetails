const express = require("express");
const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");
const allEmpolyeeAddRouter = express.Router();
const allEmployee_Joi_schema = require("../../models/all-empolyeeSchema/allEmoleeSchema_joi");

allEmpolyeeAddRouter.post("/", async (req, res) => {
    try {
        const {First_Name,last_Name,User_Name,Email,password,Confirm_Password,Employee_ID, Mobile_No,Department,Designation,Joining_Date } = req.body;

        const allEmpolyee = new allemployee({
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
        });
 
          const { error } = allEmployee_Joi_schema.validate(req.body);

          if (error) {
            return res.status(400).send(error.details[0].message);
          }
          if (password !== Confirm_Password) {
            return res.status(400).send("Passwords do not match");
          }
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

    const allEmpolyees = new allEmpolyee({ Email, password: hashedPassword });
  
        const savedallEmpolyee = await allEmpolyees.save();

        res.status(201).json({ message: "Success", allEmpolyee: savedallEmpolyee });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = allEmpolyeeAddRouter;

