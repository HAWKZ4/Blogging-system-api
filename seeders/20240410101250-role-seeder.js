"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    return queryInterface.bulkInsert("roles", [
      { roleName: "Admin", roleNumber: "111", createdAt: currentDate, updatedAt: currentDate },
      { roleName: "Employee", roleNumber: "222", createdAt: currentDate, updatedAt: currentDate },
      { roleName: "User", roleNumber: "333", createdAt: currentDate, updatedAt: currentDate },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("roles", null, {});
  },
};
