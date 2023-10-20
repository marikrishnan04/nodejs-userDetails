const express = require("express");
const Promotion = require("../../models/PromotionSchema/promotion");
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

        const savedPromotion = await promotion_employees.save();

        res.status(201).json({ message: "Success", promotion: savedPromotion });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = promotionAddRouter;

