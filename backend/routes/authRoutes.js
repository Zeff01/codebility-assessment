// routes/authRoutes.js
const express = require('express');
const router = express.Router();

const {
  register,
  login,
  verifyEmailController,
  resendVerificationController
} = require('../controllers/authController');

const rateLimiter = require('../middleware/rateLimiter');

// Public endpoints
router.post('/register', register);

// Limit login attempts: max 5 per minute per IP
router.post('/login', rateLimiter({ windowMs: 60_000, max: 5 }), login);

// Email verification callback
router.get('/verify-email', verifyEmailController);

// Resend verification: max 3 per 10 minutes per IP
router.post(
  '/resend-verification',
  rateLimiter({ windowMs: 10 * 60_000, max: 3 }),
  resendVerificationController
);

module.exports = router;
