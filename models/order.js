'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.User_address, {
        foreignKey: 'userAddress_id',
        onDelete: 'CASCADE',
      });
      order.belongsTo(models.Product_user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      order.hasMany(models.order_items, {
        foreignKey: 'orderId',
        as: 'orders',
      });
      order.hasOne(models.payment, {
        foreignKey: 'paymentId',
        as: 'orders',
      });
      order.hasOne(models.status, {
        foreignKey: 'statusId',
        as: 'orders',
      });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      total_amount: DataTypes.INTEGER,
      payment_id: DataTypes.INTEGER,
      userAddress_id: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'order',
    }
  );
  return order;
};
