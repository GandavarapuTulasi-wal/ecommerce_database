'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_address.belongsTo(models.Product_user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      User_address.hasMany(models.order, {
        foreignKey: 'userAddress_id',
        as: 'user_addresses',
      });
    }
  }
  user -
    address.init(
      {
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        postal_code: DataTypes.STRING,
        HouseNo: DataTypes.STRING,
        street: DataTypes.STRING,
        landmark: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'User_address',
      }
    );
  return user_address;
};
