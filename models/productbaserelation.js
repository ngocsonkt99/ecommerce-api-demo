'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductBaseRelation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.myAssociation = this.belongsTo(models.Category, { foreignKey: "categoryId",})
      this.myAssociation = this.belongsTo(models.Brand, { foreignKey: "brandId",})
      this.myAssociation = this.belongsTo(models.Collection, { foreignKey: "collectionId",})
      this.myAssociation = this.hasMany(models.Product, { foreignKey: "productBaseRelationId",})
    }
  }
  ProductBaseRelation.init({
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductBaseRelation',
  });
  return ProductBaseRelation;
};