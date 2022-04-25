'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductBaseRelations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        reference: {
          model:{
            tableName: 'Brands',
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        reference: {
          model:{
            tableName: 'Categories',
          }
        }
      },
      collectionId: {
        type: Sequelize.INTEGER,
        reference: {
          model:{
            tableName: 'Collections',
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductBaseRelations');
  }
};