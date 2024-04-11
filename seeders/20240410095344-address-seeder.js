"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    return queryInterface.bulkInsert("addresses", [
      { address: "POLAND", userId: 1, createdAt: currentDate, updatedAt: currentDate },
      { address: "SWISS", userId: 2, createdAt: currentDate, updatedAt: currentDate },
      { address: "ITALY", userId: 3, createdAt: currentDate, updatedAt: currentDate },
      { address: "UAE", userId: 4, createdAt: currentDate, updatedAt: currentDate },
      { address: "Germany", userId: 5, createdAt: currentDate, updatedAt: currentDate },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("address", null, {});
  },
};
