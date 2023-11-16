"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Dat",
        lastName: "Nguyen",
        email: "datnguyen21122001@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        firstName: "Eric",
        lastName: "Nguyen",
        email: "eric21122001@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
