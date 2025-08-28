"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersData = [
      {
        lastName: "Account",
        firstName: "Admin",
        email: "admin@example.com",
        password: "123456",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lastName: "Account",
        firstName: "User",
        email: "user@example.com",
        password: "123456",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const hashedUsers = await Promise.all(
      usersData.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return { ...user, password: hashedPassword };
      })
    );

    return queryInterface.bulkInsert("Users", hashedUsers);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
