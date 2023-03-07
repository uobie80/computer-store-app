const Customers = require('./Customers.js');
const Merchants = require('./Merchants.js');
const Order_Items = require('./Order_Items.js');
const Orders = require('./Orders.js');
const Products = require('./Products.js');

//Define relationship between Customers and Orders tables
Customers.hasMany(Orders, {
  foreignKey: 'customer_id',
});

Orders.belongsTo(Customers, {
  foreignKey: 'customer_id',
});

//Define relationship between Customers and Merchants tables
 Customers.hasOne(Merchants, {
    foreignKey: 'customer_id',
  });
  
  Merchants.belongsTo(Customers, {
    foreignKey: 'customer_id',
  });

  //Define relationship between Customers and Products tables
  Products.hasMany(Order_Items, {
    foreignKey: 'product_id',
  });
  
  Order_Items.belongsTo(Products, {
    foreignKey: 'product_id',
  });

 //Define relationship between Orders and Order_Items tables
  Orders.hasMany(Order_Items, {
    foreignKey: 'order_id',
  });
  
  Order_Items.belongsTo(Orders, {
    foreignKey: 'order_id',
  });


   //Define relationship between Products and Merchants tables
  Products.hasOne(Merchants, {
    foreignKey: 'product_id',
  });
  
  Merchants.belongsTo(Products, {
    foreignKey: 'product_id',
  });



  module.exports = { Customers, Merchants, Order_Items, Orders, Products }