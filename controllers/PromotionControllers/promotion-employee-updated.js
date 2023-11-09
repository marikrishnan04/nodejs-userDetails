const Promotion = require("../../models/PromotionSchema/promotion");
exports.promotionUpdated=( async (req, res) => {
    try {
        const promotion_employees = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!promotion_employees) {
            return res.status(404).send({ error: "Promotion not found" });
        }

        return res.status(200).send({ message: "Success", promotion_employees });
    } catch (err) {
        console.error(err);
        res.status(401).send({ error: "err" });    }
});


