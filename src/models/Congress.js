// models/Congress.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import your Sequelize instance

const Congress = sequelize.define('Congress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    person_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    district_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    state_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    term_start_date: {
        type: DataTypes.DATE,
    },
    term_end_date: {
        type: DataTypes.DATE,
    },
    party: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    position: {
        type: DataTypes.ENUM(['Senator', 'Representative']),
        allowNull: false,
    },
}, {
    tableName: 'congress', // Ensure this matches your existing table name
    timestamps: false, // If you don't have timestamp fields in your table
});

module.exports = Congress;
