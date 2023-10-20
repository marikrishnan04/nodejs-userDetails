const express = require("express");
const Promotion = require("../../models/PromotionSchema/promotion");
const promotionDeleteRouter = express.Router();

promotionDeleteRouter.delete("/:id", async (req, res) => {
    console.log(req.params);
    try {
        const deletedPromotion = await Promotion.findByIdAndDelete({_id:req.params.id});
        if (!deletedPromotion) {
            return res.status(404).json({ error: "Promotion doesn't exist!" });
        }
        return res.status(200).json({ message: "Deleted promotion" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = promotionDeleteRouter;
