const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('multi_db', 'commonuser', 'commonpwd', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

// Test the database connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;
