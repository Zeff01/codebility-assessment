const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({message: 'Token missing'});

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if( err ) return res.status(403).json({ message: 'Invalid token'});
    req.user = user;
    next();
  });
}

module.exports = authenticate;