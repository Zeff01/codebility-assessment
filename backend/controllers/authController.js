// controllers/authController.js
const {
  registerUser,
  loginUser,
  verifyEmail,
  resendVerificationEmail
} = require('../services/authService');

const {
  validateRegister,
  validateLogin,
  validateEmailOnly
} = require('../validation/authValidation');

/**
 * POST /api/auth/register
 */
async function register(req, res, next) {
  try {
    const validatedData = validateRegister(req.body);
    const user = await registerUser(validatedData);

    return res.status(201).json({
      message: 'Registration successful. Please check your email to verify your account.',
      user
    });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/auth/login
 */
async function login(req, res, next) {
  try {
    const validatedData = validateLogin(req.body);
    const result = await loginUser(validatedData);

    return res.status(200).json({
      message: 'Login successful',
      token: result.token
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/auth/verify-email?token=...
 */
async function verifyEmailController(req, res, next) {
  try {
    const token = req.query.token;

    if (!token) {
      return res.status(400).json({
        message: 'Verification token is required'
      });
    }

    const user = await verifyEmail(token);

    return res.status(200).json({
      message: 'Email verified successfully. You may now log in.',
      user
    });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/auth/resend-verification
 */
async function resendVerificationController(req, res, next) {
  try {
    const { email } = validateEmailOnly(req.body);

    const user = await resendVerificationEmail(email);

    return res.status(200).json({
      message: 'Verification email has been resent.',
      user
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  register,
  login,
  verifyEmailController,
  resendVerificationController
};
