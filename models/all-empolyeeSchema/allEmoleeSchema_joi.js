const Joi = require("joi");



const allEmployee_Joi_schema = Joi.object({
    Email: Joi.string().email().required(),
    First_Name:Joi.string().required(),
    last_Name:Joi.string().required(),
    User_Name:Joi.string().required(),
    password:Joi.string().required(),
    Confirm_Password:Joi.string().required(),
    Employee_ID:Joi.string().required(),
    Mobile_No:Joi.number().required(),
    Department:Joi.string().required(),
    Designation:Joi.string().required(),
    Joining_Date:Joi.date()
  });

  module.exports=allEmployee_Joi_schema;