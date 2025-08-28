const { User } = require("../models");
exports.adminAuthorization = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);

    if (user.roleId === 2)
      return res.status(401).json({ message: "ACCESS UNAUTHORIZE" });

    next();
  } catch (error) {}
};
