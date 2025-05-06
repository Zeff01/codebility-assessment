const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');
const authenticate = require('../middleware/authMiddleware');

// Authenticated routes
router.post('/', authenticate, noteController.createNote);
router.get('/', authenticate, noteController.getNotes);

module.exports = router;
