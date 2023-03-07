const sequelize = require('../config/connection');
const { Customers, Products } = require('../models');
const bcrypt = require('bcrypt');
const customersSeedData = require('./customersSeedData.json');
const productsSeedData = require('./productsSeedData.json');



//Encrypt password for seed customers
customersSeedData.forEach(user => {
  const salt = 10;
  const plainPassword = user.password;
  bcrypt.hash(plainPassword, salt, (err, hashedPassword) => {
    if (err) {
      console.error(err);
    }else{
      user.password = hashedPassword;
    }
  });
});


//Insert customer data into database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const customers = await Customers.bulkCreate(customersSeedData);
  const products = await Products.bulkCreate(productsSeedData);

   console.log(customers);
   console.log(products);
  /* 
  for (const { id } of drivers) {
    // Need to include a valid driver_id when creating a license
    const newLicense = await License.create({
      driver_id: id,
    });
  }
  */

  process.exit(0);
};

seedDatabase();