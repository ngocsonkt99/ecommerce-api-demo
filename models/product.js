'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.myAssociation = this.hasMany(models.ProductImages, { foreignKey: "productId",})
      this.myAssociation = this.belongsTo(models.ProductBaseRelation, { foreignKey: "productBaseRelationId",})
    }
  };
  Product.init({
    productBaseRelationId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};