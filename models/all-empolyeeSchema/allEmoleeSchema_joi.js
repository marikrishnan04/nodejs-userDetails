const Joi = require("joi");

const allEmployee_Joi_schema = Joi.object({
    First_Name: Joi.string().required(),
    last_Name: Joi.string().required(),
    User_Name: Joi.string().required(),
    email: Joi.string().email().required(), // Validate email format and make it required
    password: Joi.string().required(),
    Confirm_Password: Joi.string().required(),
    Mobile_No: Joi.number().integer().required(),
    Employee_ID: Joi.string().required(),
    Department: Joi.string().required(),
    Company: Joi.string().required(),
    Designation: Joi.string().required(),
    Joining_Date: Joi.date(),
});

module.exports = allEmployee_Joi_schema;
