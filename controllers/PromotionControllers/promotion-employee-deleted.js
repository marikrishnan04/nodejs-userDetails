const Promotion = require("../../models/PromotionSchema/promotion");

exports.promotionDelete=( async (req, res) => {
    try {
        const deletedPromotion = await Promotion.findByIdAndDelete({_id:req.params.id});
        if (!deletedPromotion) {
            return res.status(404).send({ error: "Promotion doesn't exist!" });
        }
        return res.status(200).send({ message: "Deleted promotion" });
    } catch (error) {
        console.error(error);
        res.status(401).send({ error: "err" });}
});

