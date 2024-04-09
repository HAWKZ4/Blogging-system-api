"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentData = new Date();
    return queryInterface.bulkInsert("categories", [
      {
        name: "Html",
        createdAt: currentData,
        updatedAt: currentData,
      },
      {
        name: "Css",
        createdAt: currentData,
        updatedAt: currentData,
      },
      {
        name: "Js",
        createdAt: currentData,
        updatedAt: currentData,
      },
      {
        name: "React",
        createdAt: currentData,
        updatedAt: currentData,
      },
      {
        name: "Node",
        createdAt: currentData,
        updatedAt: currentData,
      },
      {
        name: "Flutter",
        createdAt: currentData,
        updatedAt: currentData,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
