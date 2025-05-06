const jwt = require('jsonwebtoken');
require('dotenv').config();
const { createUser, findUserByUsername } = require('../repositories/userRepository');
const SECRET_KEY = process.env.JWT_SECRET;

function register(username, password, role = 'user') {
    if(findUserByUsername(username)) {
        const err = new Error('User already exists');
        err.status = 400;
        throw err;
    }
    return createUser({username, password, role});
}

function login(username, password) {
    const user = findUserByUsername(username);
    if (!user || user.password !== password) {
        const err = new Error('Invalid credentials');
        err.status = 401;
        throw err;
    }
    const token = jwt.sign({username, role: user.role}, SECRET_KEY, { expiresIn: '1h'});
        return { token };
}

module.exports = { register, login};