const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../repositories/userRepository');
const SECRET_KEY = process.env.JWT_SECRET;