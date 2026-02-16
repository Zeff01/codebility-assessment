const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Validation middleware
const registerValidation = [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
];

// Helper to check validation results
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post('/register', registerValidation, validate, authController.register);
router.post('/login', authController.login);
router.get('/profile', verifyToken, authController.getProfile);

module.exports = router;