"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        name: "admin",
        displayName: "Administrator",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "user",
        displayName: "Regular User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
