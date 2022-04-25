'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', 
    [
      {
        name: 'Fashion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Woman',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Man',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
