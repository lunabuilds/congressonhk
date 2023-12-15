// Define your routes using the controller methods
const express = require('express');
const router = express.Router();
const statementsController = require('../controllers/statementsController');

// Route to get bills by congressId
router.get('/statements/:congressId', async (req, res) => {
    const { congressId } = req.params;

    try {
        const statements = await statementsController.getStatementsByCongressId(congressId);
        res.json({ statements });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching statements' });
    }
});

module.exports = router;
