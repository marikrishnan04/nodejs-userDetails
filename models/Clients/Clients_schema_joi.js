const Joi = require("joi");

const Clients_joi = Joi.object({
  client_id: Joi.string().required(),
  client_name: Joi.string().required(),
  client_email: Joi.string().email().required(),
  client_company: Joi.string().required(),
  client_phonenumber: Joi.string().required(),
  state: Joi.string().required(),
  status: Joi.string().required(),
  action: Joi.string().required(),
});

module.exports = Clients_joi;
