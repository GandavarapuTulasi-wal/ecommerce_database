'use strict';
const { Model, INTEGER } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      card.belongsTo(models.Product_user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  card.init(
    {
      card_number: DataTypes.INTEGER,
      cvv: DataTypes.INTEGER,
      cardholder_name: DataTypes.STRING,
      expiry_date: DataTypes.DATE,
      card_type: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'card',
    }
  );
  return card;
};
