const jwt = require("jsonwebtoken");
exports.verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ message: "ACCESS UNAUTHORIZE" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    req.userId = userId;
    next();
  } catch (error) {}
};
