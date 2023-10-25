const Joi = require("joi");

const Emp_promotionSchema_joi = Joi.object({
    promotion_employee: Joi.string().required(),
    depertment:Joi.string().required(),
    promotion_from:Joi.string().required(),
    promotion_to:Joi.string().required(),  
    promotion_date:Joi.date()
  });

  module.exports=Emp_promotionSchema_joi;