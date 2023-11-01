const promotion = require("../../models/PromotionSchema/promotion");
const promotionview = require("express").Router();

promotionview.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
    const perPage = 10; // Set the number of items per page

    // Sort the promotion collection by the 'employee' field in ascending order
    const promotions = await promotion.find()
        .sort({ employee: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.status(200).json(promotions);
} catch (err) {
    res.status(400).json('error: ' + err);
}
});

module.exports = promotionview;
