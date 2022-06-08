'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.hasMany(models.Product, {
        foreignKey: 'merchantId',
        as: 'merchants',
      });
      Merchant.belongsToMany(ProductCategory, {
        through: 'MerchantCategory',
        as: 'productcategories',
        foreignKey: 'merchantId',
      });
    }
  }
  Merchant.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Merchant',
    }
  );
  return Merchant;
};
