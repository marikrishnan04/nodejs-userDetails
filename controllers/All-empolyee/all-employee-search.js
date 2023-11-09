const allemployee = require("../../models/all-empolyeeSchema/allEmpolyeeSchema");

exports.allemployeeSearch=( async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
        const perPage = 10; // Set the number of items per page

        // Use the 'key' route parameter for searching
        const key = req.params.key; 

        // Construct a query to search for records containing the 'key'
        const query = {
            $or: [
                { First_Name: { $regex: key, $options: "i" } },
                { last_Name: { $regex: key, $options: "i" } },
                { User_Name: { $regex: key, $options: "i" } },
                { email: { $regex: key, $options: "i" } },
                { Employee_ID: { $regex: key, $options: "i" } },
                { Department: { $regex: key, $options: "i" } },
                { Designation: { $regex: key, $options: "i" } },
            ]
        };

        // Perform the search with pagination
        const employees = await allemployee
            .find(query)
            .sort({ key: 1 })
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json({ message: "Success", employees });
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return a structured error response
    }
});

