'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_items.belongsTo(models.order, {
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
      });
      order_items.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
      });
      order_items.belongsTo(models.delivery, {
        foreignKey: 'deliveryId',
        onDelete: 'CASCADE',
      });
      order_items.hasOne(models.Return, {
        foreignKey: 'orderItem_id',
        as: 'order_items',
      });
    }
  }
  order_items.init(
    {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      deliveryId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'order_items',
    }
  );
  return order_items;
};
