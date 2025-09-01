const { Role } = require("../models");
const { errorHandler } = require("./base-controller");

exports.roles = async (req, res) => {
  try {
    const roles = await Role.findAll({
      attributes: [
        ["id", "value"],
        ["displayName", "label"],
      ],
    });

    return res.status(200).json(roles);
  } catch (error) {
    errorHandler(error, res);
  }
};
