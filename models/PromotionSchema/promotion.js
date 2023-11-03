const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');




const promotionSchema = new Schema({
        promotion_employee: joi.string().required(),
        depertment: joi.string().required(),
        promotion_from: joi.string().required(),
        promotion_to: joi.string().required(),
        promotion_date:{
            type: Date,
            default: Date.now,

        }
       
});
const promotion = mongoose.model('promotion new ', promotionSchema);
module.exports = promotion;