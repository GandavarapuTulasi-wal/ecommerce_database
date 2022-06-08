'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.ProductCategory, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
      });
      Product.belongsTo(models.Merchant, {
        foreignKey: 'merchantId',
        onDelete: 'CASCADE',
      });
      Product.belongsTo(models.cart_items, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
      });
      Product.hasMany(models.ProductImage, {
        foreignKey: 'productId',
        as: 'products',
      });
      Product.hasMany(models.order_items, {
        foreignKey: 'productId',
        as: 'products',
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      merchantId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
