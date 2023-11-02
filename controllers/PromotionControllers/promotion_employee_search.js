const express = require("express");
const promotion = require("../../models/PromotionSchema/promotion");
const promotionSearch = express.Router();

promotionSearch.get("/:key", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
        const perPage = 10; // Set the number of items per page

        // Use the 'key' route parameter for searching
        const key = req.params.key;

        // Construct a query to search for promotions containing the 'key'
        const query = {
            $or: [
                { promotion_employee: { $regex: key, $options: "i" } },
                { department: { $regex: key, $options: "i" } },
                { promotion_from: { $regex: key, $options: "i" } },
                { promotion_to: { $regex: key, $options: "i" } },
                { promotion_date: { $regex: key, $options: "i" }},
            ]
        };

        // Perform the search with pagination
        const promotions = await promotion
            .find(query)
            .sort({ promotion_date: 1 }) // Sort by the promotion date (you can change this)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json({ message: "Success", promotions });
        
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return a structured error response
    }
});

module.exports = promotionSearch;
