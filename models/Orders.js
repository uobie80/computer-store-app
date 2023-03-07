const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Orders extends Model {}

Orders.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        // This is a reference to another model
        model: 'customers',
        // This is the column name of the referenced model
        key: 'id',
        }
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
  }
);

module.exports = Orders;