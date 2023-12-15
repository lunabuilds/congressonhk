// controllers/statementsController.js
const Statement = require('../models/Statement');
const { Op } = require('sequelize');

module.exports = {
    getStatementsByCongressId: async (congressId) => {
        try {
            // Convert congressId to a number if necessary
            congressId = parseInt(congressId);

            const statements = await Statement.findAll({
                attributes: [
                    'id',
                    'statement_title',
                    'statement_url'
                ],
                where: {
                    sponsor_id: congressId
                },
            });

            return statements;
        } catch (error) {
            console.error('Error fetching statements:', error);
            throw error;
        }
    }

    // Other controller methods for handling statements...
};
