const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/user.controller');
const { Authenticate } = require('../middleware/auth.middleware');
const {
  loginMiddleware,
  registerMiddleware,
} = require('../middleware/userValidation.middleware');

/**
 * Routes
 */
router.post('/register', registerMiddleware, AuthController.register);
router.post('/login', loginMiddleware, AuthController.login);

module.exports = router;
