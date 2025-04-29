const express = require('express');
const router = express.Router();
const authenticateToken = require('./middleware/authMiddleware');
const { getWeather } = require('../services/weatherService');

const notes = []; // in-memory notes

router.post('/', authenticateToken, async (req, res) => {})