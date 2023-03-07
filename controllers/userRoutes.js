const router = require('express').Router();

const { Customers } = require('../models');



router.get('/', async (req, res) => {
res.send("In user routes");
});


router.post('/', async (req, res) => {

   console.log("In userRoutes.js");
   console.log(req.body);

  try {
    const customerData = await Customers.create(req.body);

   req.session.save(() => {
     req.session.user_id = customerData.id;
     req.session.firstname = customerData.firstname;
     req.session.lastname = customerData.lastname;
     req.session.logged_in = true;
     req.session.Admin = (customerData.isAdmin == '1') ? true : false;
     req.session.isPremiumMember = (customerData.membership == "premium") ? true : false;
     res.status(200).json(customerData);   
   });
  
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



router.post('/logout', (req, res) => {

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }

});



module.exports = router;