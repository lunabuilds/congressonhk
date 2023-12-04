// districtsRoutes.js
const express = require('express');
const router = express.Router();
const districtsController = require('../controllers/districtsController');

router.get('/districts', districtsController.getAllDistricts);
// Define other routes for districts here...

module.exports = router;
