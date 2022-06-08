'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Return extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Return.belongsTo(models.order_items, {
        foreignKey: 'orderItem_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Return.init(
    {
      reason: DataTypes.STRING,
      type: DataTypes.STRING,
      orderItem_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Return',
    }
  );
  return Return;
};
