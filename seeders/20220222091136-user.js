'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10; 

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync('1q2w3e', salt);

    await queryInterface.bulkInsert('Users', 
    [
      {
        firstName: 'test',
        lastName: 'one',
        email: 'test1@gmail.com',
        password: hash,
        image: '1q2w3e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'test',
        lastName: 'two',
        email: 'test2@gmail.com',
        password: hash,
        image: '1q2w3e',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
