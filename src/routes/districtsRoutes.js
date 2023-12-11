// Define your routes using the controller methods
const express = require('express');
const router = express.Router();
const districtsController = require('../controllers/districtsController');

router.get('/districts', async (req, res) => {
    try {
        const allDistricts = await districtsController.getAllDistricts();
        res.json(allDistricts);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch districts'
        });
    }
});

// Route to get a district by name
router.get('/districts/:dname', async (req, res) => {
    const districtName = req.params.dname;

    try {
        const district = await districtsController.getDistrictByName(districtName);

        res.json(district);
    } catch (error) {
        console.error(error);

        res.status(404).json({
            error: 'District not found',
        });
    }
});

// Route to get a district by congress_id
router.get('/districts/c/:id', async (req, res) => {
    const congressId = parseInt(req.params.id);

    try {
        const district = await districtsController.getDistrictByCongressId(congressId);

        res.json(district);
    } catch (error) {
        console.error(error);

        res.status(404).json({
            error: 'District not found',
        });
    }
});

module.exports = router;
