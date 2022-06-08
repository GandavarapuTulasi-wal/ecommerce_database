'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart_items.belongsTo(models.cart, {
        foreignKey: 'cartId',
        onDelete: 'CASCADE',
      });
      cart_items.hasMany(models.product, {
        foreignKey: 'productId',
        as: 'cart_items',
      });
    }
  }
  cart_items.init(
    {
      quantity: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      cartId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'cart_items',
    }
  );
  return cart_items;
};
