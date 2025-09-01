const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.scope("withPassword").findByEmail(email);

  if (!user)
    return res.status(401).json({
      message: "Invalid email address and passwords",
    });

  const passwordComparison = await User.comparePassword(
    password,
    user.password
  );

  if (!passwordComparison)
    return res.status(401).json({
      message: "Invalid email address and passwords",
    });

  const accessToken = jwt.sign({ id: user.id }, "codebility", {
    expiresIn: "7d",
  });

  const { password: fieldPassword, ...userFields } = user.dataValues;

  return res.status(200).json({
    user: userFields,
    accessToken,
  });
};

exports.user = async (req, res) => {
  const user = await User.findByPk(req.userId);

  return res.status(200).json({
    user,
  });
};
