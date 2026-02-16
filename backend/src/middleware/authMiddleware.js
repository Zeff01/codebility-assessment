const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: "A token is required for authentication" });
    }

    try {
        // Handle "Bearer <token>" format
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        
        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
    return next();
};

module.exports = { verifyToken };