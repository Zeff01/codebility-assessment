// routes/index.js
const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const weatherRoutes = require('./weatherRoutes');

// Example public healthcheck
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/auth', authRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;
