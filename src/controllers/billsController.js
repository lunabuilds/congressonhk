// controllers/billsController.js
const Bill = require('../models/Bill');
const { Op } = require('sequelize');

module.exports = {
    getBillsByCongressId: async (congressId) => {
        try {
            // Convert congressId to a number if necessary
            congressId = parseInt(congressId);

            const bills = await Bill.findAll({
                attributes: [
                    'id',
                    'bill_name',
                    'bill_url',
                    'latest_status',
                    'sponsor_id',
                    'cosponsors',
                    'yeas',
                    'novotes',
                    'nays'
                ],
                where: {
                    [Op.or]: [
                        { sponsor_id: congressId },
                        { cosponsors: { [Op.contains]: [congressId] } },
                        { yeas: { [Op.contains]: [congressId] } },
                        { novotes: { [Op.contains]: [congressId] } },
                        { nays: { [Op.contains]: [congressId] } },
                    ],
                },
            });

            const formattedBills = bills.map(bill => {
                const associations = {
                    sponsor: bill.sponsor_id === congressId,
                    cosponsor: Array.isArray(bill.cosponsors) && bill.cosponsors.includes(congressId),
                    yeas: Array.isArray(bill.yeas) && bill.yeas.includes(congressId),
                    novotes: Array.isArray(bill.novotes) && bill.novotes.includes(congressId),
                    nays: Array.isArray(bill.nays) && bill.nays.includes(congressId),
                };

                const congressIn = Object.keys(associations).find(key => associations[key]);

                return {
                    congressIn: congressIn || '', // Handle the case when congressIn is undefined
                    bill_name: bill.bill_name,
                    bill_url: bill.bill_url,
                    latest_status: bill.latest_status
                };
            });

            return formattedBills;
        } catch (error) {
            console.error('Error fetching bills:', error);
            throw error;
        }
    }

    // Other controller methods for handling bills...
};
