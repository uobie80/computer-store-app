const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Products extends Model {}

Products.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      make: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      model: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      price: {
          type: DataTypes.STRING,
          allowNull: true,
      },
       serial_number: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
      },
       image: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      page: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
  }
);

module.exports = Products;