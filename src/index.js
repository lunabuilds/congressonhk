// src/index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Import Sequelize instance

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
// Add your routes here

// Start server
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
