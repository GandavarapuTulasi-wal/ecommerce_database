'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_user.hasMany(models.User_address, {
        foreignKey: 'userId',
        as: 'product_users',
      });
      Product_user.hasOne(models.Cart, {
        foreignKey: 'userId',
        as: 'product_users',
      });
      Product_user.hasMany(models.order, {
        foreignKey: 'userId',
        as: 'product_users',
      });
      Product_user.hasMany(models.card, {
        foreignKey: 'userId',
        as: 'product_users',
      });
    }
  }
  product -
    user.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        mobile: DataTypes.STRING,
        email: DataTypes.STRING,
        fullname: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Product_user',
      }
    );
  return product_user;
};
