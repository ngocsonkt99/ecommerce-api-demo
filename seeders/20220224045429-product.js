'use strict';
var faker = require("faker");
require('dotenv').config()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //product
    let dataProduct = [];
    let APP_URL = process.env.APP_URL;
    let APP_PORT = process.env.APP_PORT;
    for(let i = 1; i<15; i++){
      dataProduct.push(
        {
          productBaseRelationId: 1,
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: faker.commerce.price(),
          stock: (Math.floor(Math.random() * 30) + 2),
          thumbnail: APP_URL + ":" + APP_PORT +'/assets/uploads/item' + (Math.floor(Math.random() * 5) + 1) + '.png', //image in asset
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      );
    }
    const products = await queryInterface.bulkInsert('Products', dataProduct, 
      { 
        returning: ['id'] 
      }
    );

    //product image
    let dataProductImage = [];
    for(let i = 1; i < products.length; i++){
      dataProductImage.push(
        {
          productId: products[i].id,
          photo: faker.random.image(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: products[i].id,
          photo: faker.random.image(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: products[i].id,
          photo: faker.random.image(),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      );
    }

    await queryInterface.bulkInsert('ProductImages', dataProductImage, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
    await queryInterface.bulkDelete('ProductImages', null, {});
    await queryInterface.bulkDelete('Products', null, {});

  }
};
