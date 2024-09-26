const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  messages: [{ text: String, user: String, timestamp: Date }]
});

module.exports = mongoose.model('Session', sessionSchema);
