const express = require('express');
const router = express.Router();
const { Authenticate } = require('../middleware/auth.middleware');
const { weather, city } = require('../controllers/weather.controller');

/**
 * Routes
 */
router.get('/', Authenticate, weather);
router.get('/city', Authenticate, city);

module.exports = router;
