// app.js
const express = require('express');
const app = express();

// Import routes
const districtsRoutes = require('./routes/districtsRoutes');
const congressRoutes = require('./routes/congressRoutes');
const billsRoutes = require('./routes/billsRoutes');

// Use routes
app.use('/api', districtsRoutes); // e.g., '/api/districts'
app.use('/api', congressRoutes); // e.g., '/api/congress'
app.use('/api', billsRoutes);    // e.g., '/api/bills'

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
