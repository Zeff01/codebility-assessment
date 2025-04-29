const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();
const users = [];


//register
router.post('/register', async (req, res) => {
    const { username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    users.push({ username, password: hashedPassword});
    res.json({ message: 'User registered successfully'})
});

router.post('/login', (req, res) => {

});

module.exports = router;
