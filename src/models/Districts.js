// District.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Assuming you have a config for Sequelize

const Districts = sequelize.define('multi_db.districts', {
    districtName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    districtStartDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    districtEndDate: {
        type: DataTypes.DATE
    },
    stateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    congressIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
});

module.exports = Districts;
