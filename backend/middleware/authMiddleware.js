// middleware/authMiddleware.js
const { verifyToken } = require('../services/authService');

function authMiddleware(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  const [type, token] = header.split(' ');
  if (type !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid Authorization header' });
  }

  try {
    const payload = verifyToken(token);
    req.user = { id: payload.sub, email: payload.email };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = authMiddleware;
