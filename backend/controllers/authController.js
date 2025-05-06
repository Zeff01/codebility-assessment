const AuthService = require('../services/authService');

async function register(req, res, next) {
    try {
        const{ username, password, role} = req.body;
        const user = AuthService.register(username, password, role);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const { username, password} = req.body;
        const result = AuthService.login(username, password);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {register, login};