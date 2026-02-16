const express = require('express');
const weatherController = require('../controllers/weatherController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Protected Route: Requires a valid JWT token
router.get('/', verifyToken, weatherController.getWeather);

module.exports = router;