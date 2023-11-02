const Joi = require("joi");

const Clients_joi = Joi.object({
  client_name: Joi.string().required(),
  client_email: Joi.string().email().required(),
  client_company: Joi.string().required(),
  client_mobilenumber: Joi.string().required(),
  client_address: Joi.string().required(),
  date: Joi.date(),
  
});

module.exports = Clients_joi;
