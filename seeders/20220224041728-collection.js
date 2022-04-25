'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Collections', 
    [
      {
        name: 'T-shirts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jeans',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Crop Tops',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Collections', null, {});
  }
};
