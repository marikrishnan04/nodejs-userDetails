const Joi = require("joi");

const Emp_projectsSchema_joi = Joi.object({
    Project_Name: Joi.string().required(),
    Client:Joi.string().required(),
    Priority:Joi.string().required(),
    Add_Project_Leader:Joi.string().required(),
    Team_Members:Joi.string().required(),
    Description:Joi.string().required(),
    Upload_File:{
      filename: Joi.string().required(),
      // path: Joi.string().required(),
      // headers: Joi.object({
      //   'content-disposition' : Joi.string().required(),
      //   'content-type' : Joi.string().valid(['image/jpeg']).required(),
      // }).required(),
      // bytes: Joi.number().required()
    },
    Rate:Joi.number().required(),
    Start_Date:Joi.date() .raw().format("YYYY-MM-DD").less("now"),
    end_Date:Joi.date().raw().format("YYYY-MM-DD").less("now").min(Joi.ref("Start_Date")).allow(null)
  });

  module.exports=Emp_projectsSchema_joi;