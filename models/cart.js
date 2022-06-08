'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.Product_user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      cart.hasMany(models.cart_items, {
        foreignKey: 'cartId',
        as: 'carts',
      });
    }
  }
  cart.init(
    {
      userId: DataTypes.INTEGER,
      total_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'cart',
    }
  );
  return cart;
};
