const { User } = require("../models");

exports.paginatedUser = async (pageSize, pageNumber, searchFields = {}) => {
  const offset = (+pageNumber - 1) * pageSize;

  let whereClause = undefined;

  if (Object.keys(searchFields).length > 0) whereClause = searchFields;

  const totalCount = await User.count({ where: whereClause });

  const totalPages = Math.ceil(totalCount / parseInt(pageSize));

  const users = await User.findAll({
    where: whereClause,
    offset: offset,
    limit: pageSize,
    attributes: ["id", "firstNam", "lastName", "email"],
  });

  return {
    data: users,
    total: totalCount,
    currentPage: +pageNumber,
    totalPages: +totalPages,
    pageSize: +pageSize,
  };
};

exports.createUser = ({ email, password, firstName, lastName, roleId }) => {
  return User.create({
    email,
    password,
    firstName,
    lastName,
    roleId,
  });
};

exports.updateUser = async (
  { email, password, firstName, lastName, roleId },
  id
) => {
  const user = await this.getUserById(id);

  user.update({
    email,
    password,
    firstName,
    lastName,
    roleId,
  });
};

exports.getUserById = (id) => {
  return User.findByPk(id);
};

exports.deleteUserById = async (id) => {
  const user = await this.getUserById(id);

  user.destroy();
};
