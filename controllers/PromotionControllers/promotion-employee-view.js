const promotion = require("../../models/PromotionSchema/promotion");
const promotionview = require("express").Router();

promotionview.get("/", async (req, res) => {
    try {
        const users = await promotion.find();
        res.json(users);
      } catch (err) {
        res.status(400).json('Error: ' + err);
      }
});

module.exports = promotionview;
