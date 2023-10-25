const express = require("express");
const Promotion = require("../../models/PromotionSchema/promotion");
const Emp_promotionSchema_joi = require("../../models/PromotionSchema/Emp_promotionSchema_joi");
const promotionAddRouter = express.Router();

promotionAddRouter.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const { promotion_id, promotion_employee, department, promotion_from, promotion_to, promotion_date } = req.body;
        
        const promotion_employees = new Promotion({
            promotion_id,
            promotion_employee,
            department,
            promotion_from,
            promotion_to,
            promotion_date
        });
        const { error } = Emp_promotionSchema_joi.validate(req.body);

        if (error) {
          return res.status(400).send(error.details[0].message);
        }
        const savedPromotion = await promotion_employees.save();

        res.status(201).json({ message: "Success", promotion: savedPromotion });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = promotionAddRouter;

