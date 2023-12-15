// models/Bill.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import your Sequelize instance

const Bill = sequelize.define('Bill', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bill_name: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    bill_url: {
        type: DataTypes.STRING(255),
    },
    sponsor_id: {
        type: DataTypes.INTEGER,
    },
    cosponsors: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    yeas: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    novotes: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    nays: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    latest_status: {
        type: DataTypes.ENUM(['Introduced', 'Committee Consideration', 'Passed House', 'Passed Senate', 'Failed House', 'Failed Senate', 'Resolving Differences', 'Veto Actions', 'To President', 'Became Law', 'Agreed to in Senate', 'Agreed to in House']),
        allowNull: false,
    },
    bill_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    tableName: 'bills', // Ensure this matches your existing table name
    timestamps: false, // If you don't have timestamp fields in your table
});

module.exports = Bill;
