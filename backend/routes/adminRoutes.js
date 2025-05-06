const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const { getAllUsers} = require('../repositories/userRepository');

router.get('/admin/users/', authenticate, authorizeRoles('admin'), (req, res) => {
    res.json({users: getAllUsers()})
});

module.exports = router;