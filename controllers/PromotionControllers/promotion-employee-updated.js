const express = require("express");
const Promotion = require("../../models/PromotionSchema/promotion");
const promotionUpdateRouter = express.Router();

promotionUpdateRouter.patch("/:id", async (req, res) => {
    try {
        const promotion_employees = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!promotion_employees) {
            return res.status(404).json({ error: "Promotion not found" });
        }

        return res.status(200).json({ message: "Success", promotion_employees });
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "err" });    }
});

module.exports = promotionUpdateRouter;

