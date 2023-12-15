// app.js
const express = require('express');
const app = express();
const port = process.env.PORT;

// Import routes
const districtsRoutes = require('./routes/districtsRoutes');
const congressRoutes = require('./routes/congressRoutes');
const billsRoutes = require('./routes/billsRoutes');
const statementsRoutes = require('./routes/statementsRoutes');

// Use routes
app.use('/api', districtsRoutes); // e.g., '/api/districts'
app.use('/api', congressRoutes); // e.g., '/api/congress'
app.use('/api', billsRoutes);    // e.g., '/api/bills'
app.use('/api', statementsRoutes); // e.g., '/api/statements'

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// })
// Start the server
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
