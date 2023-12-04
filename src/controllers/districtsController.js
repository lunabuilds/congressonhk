// districtsController.js
const Districts = require('../models/Districts'); // Import your District model

module.exports = {
    getAllDistricts: async (req, res) => {
        try {
            const districts = await Districts.find(); // Retrieve districts from the database
            res.status(200).json(districts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Other controller methods for handling districts
};
