const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const config = require('config'); // Require the config module

dotenv.config();

// Load configuration from config/default.json
const jwtSecret = config.get('jwtSecret');

const app = express();

app.use(cors());

app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || dbConfig.uri; // Assuming you have a 'dbConfig' object in your default.json
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Get port from environment variable or use default port 5000
const PORT = process.env.PORT;

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks')); // Add routes for tasks
app.use('/api/teams', require('./routes/teams')); // Add routes for teams

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Backend deployment successful.'); // Log success message for backend deployment
});

// Send success message to the client
app.get('/', (req, res) => {
  res.send('Backend deployment successful.'); // Send success message to the client
});
