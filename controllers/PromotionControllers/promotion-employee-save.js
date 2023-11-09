const Promotion = require("../../models/PromotionSchema/promotion");
const Emp_promotionSchema_joi = require("../../models/PromotionSchema/Emp_promotionSchema_joi");

exports.promotionAdd=( async (req, res) => {
    try {
        const { promotion_employee, department, promotion_from, promotion_to, promotion_date } = req.body;
        
        const promotion_employees = new Promotion({
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

        res.status(201).send({ message: "Success", promotion: savedPromotion });
    } catch (err) {
        res.status(401).send({ error: "err" });
    }
});


