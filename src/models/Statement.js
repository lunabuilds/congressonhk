// models/Statement.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import your Sequelize instance

const Statement = sequelize.define('Bill', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    statement_title: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    statement_url: {
        type: DataTypes.STRING(255),
    },
    sponsor_id: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'statements', // Ensure this matches your existing table name
    timestamps: false, // If you don't have timestamp fields in your table
});

module.exports = Statement;
