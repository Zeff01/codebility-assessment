// backend/routes/weatherRoutes.js
const express = require('express');
const router = express.Router();

const { getWeather } = require('../controllers/weatherController'); // named export
const authMiddleware = require('../middleware/authMiddleware');     // default export


console.log("DEBUG getWeather =", getWeather);
console.log("DEBUG authMiddleware =", authMiddleware);

// Protected endpoint
router.get('/', authMiddleware, getWeather); // GET /api/weather

module.exports = router;
