'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      delivery.belongsTo(models.order_items, {
        foreignKey: 'deliveryId',
        onDelete: 'CASCADE',
      });
    }
  }
  delivery.init(
    {
      delivery_date: DataTypes.DATE,
      delivery_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'delivery',
    }
  );
  return delivery;
};
