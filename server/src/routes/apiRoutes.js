const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Example API route (requires authentication)
router.get('/data', authMiddleware, (req, res) => {
  try {
    // Access user information from the request object (if needed)
    const user = req.user;

    // Perform actions based on the authenticated user
    res.json({ message: 'API route response', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

