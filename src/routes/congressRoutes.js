// Define your routes using the controller methods
const express = require('express');
const router = express.Router();
const congressController = require('../controllers/congressController');

router.get('/congress', async (req, res) => {
    try {
        const members = await congressController.getAllCongressMembers();
        res.json(members);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch congress members'
        });
    }
})
router.get('/congress/:name', async (req, res) => {
    const congressMemberName = req.params.name;
    try {
        const congressMemberInfo = await congressController.getInfoByPersonName(congressMemberName);
        res.json(congressMemberInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch congress member info'
        });
    }
});

// Route to get congress members by district_name
router.get('/congress/d/:dname', async (req, res) => {
    const districtName = req.params.dname;

    try {
        const congressMembers = await congressController.getMembersByDistrict(districtName);
        res.json(congressMembers);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Congress members not found',
        });
    }
});


// Route to get congress members by party
router.get('/congress/p/:pname', async (req, res) => {
    const party = req.params.pname;

    try {
        const congressMembers = await congressController.getPartyMembers(party);

        res.json(congressMembers);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Congress members not found',
        });
    }
});

// Route to get congress members by state
router.get('/congress/s/:state', async (req, res) => {
    const state_name = req.params.state;

    try {
        const congressMembers = await congressController.getMembersByState(state_name);
        res.json(congressMembers);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Congress members not found',
        });
    }
});

module.exports = router;
