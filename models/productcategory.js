'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategory.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'productcategories',
      });
      ProductCategory.belongsToMany(Merchant, {
        through: 'MerchantCategory',
        as: 'merchant',
        foreignKey: 'categoryId',
      });
    }
  }
  ProductCategory.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ProductCategory',
    }
  );
  return ProductCategory;
};
