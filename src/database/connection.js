const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_DIALECT} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: false,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.'); // eslint-disable-line no-console
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err); // eslint-disable-line no-console
    });

module.exports = sequelize;
