const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Define allowed origins based on environment
const allowedOrigins = ['http://localhost:3000', 'https://task-forge-nu.vercel.app'];

// Configure CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowed list or if it's not defined (for testing tools)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks')); // Add routes for tasks
app.use('/api/teams', require('./routes/teams')); // Add routes for teams

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
