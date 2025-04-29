const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();
const users = [];

router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {

});

module.exports = router;
