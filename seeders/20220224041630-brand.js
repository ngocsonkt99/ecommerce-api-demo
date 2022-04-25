'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Brands', 
     [
       {
         name: 'Dorothy Perkins',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: 'Sitlly',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "Levi's",
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     ], {});
   },
 
   down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Brands', null, {});
   }
 };