// services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { User, users } = require('../models/User');
const { sendVerificationEmail } = require('./mailService');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser({ email, password }) {
  const existing = users.find(u => u.email === email);
  if (existing) {
    const error = new Error('Email already registered');
    error.status = 400;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const verificationToken = crypto.randomBytes(32).toString('hex');
  const verificationTokenExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  const newUser = new User({
    id: users.length + 1,
    email,
    passwordHash,
    verificationToken,
    verificationTokenExpires,
    isVerified: false
  });

  users.push(newUser);

  await sendVerificationEmail(newUser.email, verificationToken);

  return {
    id: newUser.id,
    email: newUser.email,
    isVerified: newUser.isVerified
  };
}

async function loginUser({ email, password }) {
  const user = users.find(u => u.email === email);
  if (!user) {
    const error = new Error('Invalid email or password');
    error.status = 401;
    throw error;
  }

  if (!user.isVerified) {
    const error = new Error('Email not verified');
    error.status = 403;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    const error = new Error('Invalid email or password');
    error.status = 401;
    throw error;
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

async function verifyEmail(token) {
  if (!token) {
    const error = new Error('Verification token is required');
    error.status = 400;
    throw error;
  }

  const user = users.find(u => u.verificationToken === token);
  if (!user) {
    const error = new Error('Invalid verification token');
    error.status = 400;
    throw error;
  }

  if (!user.verificationTokenExpires || user.verificationTokenExpires < new Date()) {
    const error = new Error('Verification token has expired');
    error.status = 400;
    throw error;
  }

  user.isVerified = true;
  user.verificationToken = null;
  user.verificationTokenExpires = null;

  return {
    id: user.id,
    email: user.email,
    isVerified: user.isVerified
  };
}

/**
 * Resend verification email to a not-yet-verified user.
 */
async function resendVerificationEmail(email) {
  const user = users.find(u => u.email === email);
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }

  if (user.isVerified) {
    const error = new Error('Email is already verified');
    error.status = 400;
    throw error;
  }

  const verificationToken = crypto.randomBytes(32).toString('hex');
  const verificationTokenExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  user.verificationToken = verificationToken;
  user.verificationTokenExpires = verificationTokenExpires;

  await sendVerificationEmail(user.email, verificationToken);

  return {
    id: user.id,
    email: user.email,
    isVerified: user.isVerified
  };
}

module.exports = {
  registerUser,
  loginUser,
  verifyToken,
  verifyEmail,
  resendVerificationEmail
};
