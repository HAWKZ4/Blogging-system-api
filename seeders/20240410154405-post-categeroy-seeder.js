"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();

    return queryInterface.bulkInsert("postcategories", [
      { postId: 1, categoryId: 1, createdAt: currentDate, updatedAt: currentDate },
      { postId: 1, categoryId: 2, createdAt: currentDate, updatedAt: currentDate },
      { postId: 2, categoryId: 3, createdAt: currentDate, updatedAt: currentDate },
      { postId: 3, categoryId: 1, createdAt: currentDate, updatedAt: currentDate },
      { postId: 1, categoryId: 2, createdAt: currentDate, updatedAt: currentDate },
      { postId: 4, categoryId: 3, createdAt: currentDate, updatedAt: currentDate },
      { postId: 2, categoryId: 1, createdAt: currentDate, updatedAt: currentDate },
      { postId: 1, categoryId: 1, createdAt: currentDate, updatedAt: currentDate },
      { postId: 3, categoryId: 1, createdAt: currentDate, updatedAt: currentDate },
      { postId: 3, categoryId: 1, createdAt: currentDate, updatedAt: currentDate },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("postcategories", null, {});
  },
};
