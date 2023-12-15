// models/District.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import your Sequelize instance

const District = sequelize.define('District', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    district_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    district_start_date: {
        type: DataTypes.DATE,
    },
    district_end_date: {
        type: DataTypes.DATE,
    },
    state_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    congress_ids: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
}, {
    tableName: 'districts', // Ensure this matches your existing table name
    timestamps: false, // If you don't have timestamp fields in your table
});

module.exports = District;
