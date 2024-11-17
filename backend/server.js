const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB database
connectDB();

// Create an instance of Express app
const app = express();

// Middleware to enable CORS and parse JSON requests
app.use(cors());
app.use(bodyParser.json());

// Define API routes for authentication and job management
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));

// Start the server and listen on the specified port or default to 5000
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});