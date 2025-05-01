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
    console.log('username', username);
    const hashedPassword = await bcrypt.hash(password, 8);
    users.push({ username, password: hashedPassword});
    res.json({ message: 'User registered successfully'})
});

// login
router.post('/login', async (req, res) => {
    const { username, password} = req.body;
    const user = users.find(u => u.username === username);
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials'});
    }
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h'});
    res.json({token});
});

module.exports = router;
