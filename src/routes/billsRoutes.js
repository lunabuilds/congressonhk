// Define your routes using the controller methods
const express = require('express');
const router = express.Router();
const billsController = require('../controllers/billsController');

// Route to get bills by congressId
router.get('/bills/:congressId', async (req, res) => {
    const { congressId } = req.params;

    try {
        const bills = await billsController.getBillsByCongressId(congressId);
        res.json({ bills });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bills' });
    }
});

module.exports = router;
