const promotion = require("../../models/PromotionSchema/promotion");
const promotionSearch = require("express").Router();

promotionSearch.get("/:key", async (req, res) => {
    try {
        const promotions = await promotion.find({
            "$or":[
                {promotion_employee:{$regex:req.params.key}},
                {department:{$regex:req.params.key}},
                {promotion_from:{$regex:req.params.key}},
                {promotion_to:{$regex:req.params.key}},
                {promotion_date:{$regex:req.params.key}},
               
            ]
        })

        res.status(200).json({ message: "Success",promotions});
        
    } catch (err) {
        res.status(400).json('error: ' + err);
    }
});

module.exports = promotionSearch;
