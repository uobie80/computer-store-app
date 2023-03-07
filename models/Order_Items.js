const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Order_Items extends Model {}

Order_Items.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
         references: {
        // This is a reference to another model
        model: 'orders',
        // This is the column name of the referenced model
        key: 'id',
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
         references: {
        // This is a reference to another model
        model: 'products',
        // This is the column name of the referenced model
        key: 'id',
        }
      },
      quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_items',
  }
);

module.exports = Order_Items;