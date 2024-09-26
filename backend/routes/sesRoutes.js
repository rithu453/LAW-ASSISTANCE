const express = require('express');
const Session = require('../models/Session'); // Ensure the path is correct
const router = express.Router();

// Create a new session
router.post('/sessions', async (req, res) => {
  const { sessionId } = req.body;
  try {
    const session = new Session({ sessionId, messages: [] });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Load a session
router.get('/sessions/:sessionId', async (req, res) => {
  try {
    const session = await Session.findOne({ sessionId: req.params.sessionId });
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a session
router.put('/sessions/:sessionId', async (req, res) => {
  const { messages } = req.body;
  try {
    const session = await Session.findOneAndUpdate(
      { sessionId: req.params.sessionId },
      { messages },
      { new: true, runValidators: true }
    );
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
