const { User } = require("../models");
const {
  paginatedUser,
  createUser,
  updateUser,
  deleteUserById,
  getUserById,
} = require("../services/user-service");
const { errorHandler } = require("./base-controller");

exports.index = async (req, res) => {
  const { pageSize = 10, page = 1 } = req.query;
  try {
    const paginatedUsers = await paginatedUser(pageSize, page);

    return res.status(200).json(paginatedUsers);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.store = async (req, res) => {
  try {
    const { email, firstName, lastName, roleId, password } = req.body;

    const user = await createUser({
      email,
      password,
      firstName,
      lastName,
      roleId,
    });

    return res.status(201).json({
      data: user,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.findUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) return res.status(404).json({ message: "Record not found" });

    req.user = user;
    next();
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.update = async (req, res) => {
  try {
    const { email, firstName, lastName, roleId, password } = req.body;

    await updateUser(
      {
        email,
        password,
        firstName,
        lastName,
        roleId,
      },
      req.params.id
    );

    return res.status(204).json(undefined);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.show = async (req, res) => {
  try {
    return res.status(200).json({ data: req.user });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.destroy = async (req, res) => {
  try {
    await deleteUserById(req.params.id);
    return res.status(204).json(undefined);
  } catch (error) {
    errorHandler(error, res);
  }
};
