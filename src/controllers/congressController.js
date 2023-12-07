// controllers/districtsController.js
const Congress = require('../models/Congress'); // Import your District model

module.exports = {
    getAllCongressMembers: async () => {
        try {
            const congressMembers = await Congress.findAll();
            if (!congressMembers) {
                throw new Error('Congress members not found');
            }
            return congressMembers;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getInfoByPersonName: async (personName) => {
        try {
            const congressMemberInfo = await Congress.findOne({
                where: {
                    person_name: personName,
                },
                attributes:
                    ['id','district_name', 'party', 'position', 'term_start_date', 'term_end_date', 'state_name'],
            });
            if (congressMemberInfo.length == 0) {
                throw new Error('Congress member not found');
            }
            return congressMemberInfo;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getMembersByDistrict: async (districtName) => {
        try {
            const congressMembers = await Congress.findAll({
                where: {
                    district_name: districtName,
                },
                attributes: ['person_name', 'term_start_date', 'term_end_date'],
            });
            if (congressMembers.length == 0) {
                throw new Error('Congress members not found');
            }
            return congressMembers;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getPartyMembers: async (party) => {
        try {
            const congressMembers = await Congress.findAll({
                where: {
                    party: party,
                },
            });
            if (congressMembers.length == 0) {
                throw new Error('Congress members not found');
            }
            return congressMembers;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getMembersByState: async (stateName) => {
        try {
            const congressMembers = await Congress.findAll({
                where: {
                    state_name: stateName,
                },
            });
            if (congressMembers.length == 0) {
                throw new Error('Congress members not found');
            }
            return congressMembers;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    
    // Other controller methods for handling districts...
};
