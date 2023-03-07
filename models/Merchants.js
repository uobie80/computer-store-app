const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Merchants extends Model {}

Merchants.init(
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
      
      product_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'id',
        }

      },
      merchant_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'merchants',
  }
);

module.exports = Merchants;