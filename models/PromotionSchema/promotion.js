const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');




const promotionSchema = new Schema({
        promotion_id: joi.number().required(),
        promotion_employee: joi.string().required(),
        depertment: joi.string().required(),
        promotion_from: joi.string().required(),
        promotion_to: joi.string().required(),
        promotion_date: joi.string().required(),
       
});
const promotion = mongoose.model('promotion', promotionSchema);
module.exports = promotion;