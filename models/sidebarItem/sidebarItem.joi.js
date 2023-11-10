const Joi = require('joi');

// Joi schema for SidebarItem
const sidebarItemSchema = Joi.object({
  id: Joi.number().required(),
  label: Joi.string().required(),
  parent_id: Joi.number().allow(null).default(null),
  icon: Joi.string(),
  order_index: Joi.number().required(),
  url: Joi.string().required(),
  children: Joi.array().items(Joi.string()), // Assuming children are represented by ObjectId strings
});

// Joi validation function
const validateSidebarItem = (data) => {
  return sidebarItemSchema.validate(data, { abortEarly: false });
};

module.exports = validateSidebarItem;
