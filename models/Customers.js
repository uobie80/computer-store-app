const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class Customers extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Customers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [8],
      },
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
	 address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
   address2: {
      type: DataTypes.STRING,
      allowNull: true,
  },
	 state: {
        type: DataTypes.STRING,
        allowNull: true,
    },
	 city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
	 country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
	 membership: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    subscription: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    isAdmin: { 
      type: DataTypes.BOOLEAN, 
      allowNull: true, 
      defaultValue: false,
      },
	 isMerchant: { 
	 type: DataTypes.BOOLEAN, 
	 allowNull: true, 
	 defaultValue: false,
	 },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }, 
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'customers',
  }
);

module.exports = Customers;