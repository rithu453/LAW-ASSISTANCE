const express = require('express');
const mongoose = require('mongoose');
const sessionRoutes = require('./routes/sesRoutes'); // Adjust path as needed
const cors = require('cors'); // Add this line

const app = express();
const port = 3004;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatbot', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors()); // Add this line to handle CORS
app.use(express.json());

// Use session routes
app.use('/api', sessionRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:3004`);
});
