// controllers/districtsController.js
const District = require('../models/District'); // Import your District model
const { Op } = require('sequelize');

module.exports = {
    getAllDistricts: async () => {
        try {
            const districts = await District.findAll(); // Use findAll() to get all districts
            return districts;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getDistrictByName: async (districtName) => {
        try {
            const district = await District.findOne({
                where: {
                    district_name: districtName,
                },
            });

            if (!district) {
                throw new Error('District not found');
            }

            return district;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    getDistrictByCongressId: async (congressId) => {
        try {
            const district = await District.findOne({
                where: {
                    congress_ids: { [Op.contains]: [congressId] },
                },
            });

            if (!district) {
                throw new Error('District not found');
            }

            return district;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // Other controller methods for handling districts...
};
