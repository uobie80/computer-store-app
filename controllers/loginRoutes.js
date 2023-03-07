const router = require('express').Router();
const { Customers } = require('../models');

router.get('/', async (req, res) => {

    res.render('login');
});


// Login
router.post('/', async (req, res) => {
    try {
      const customerData = await Customers.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!customerData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      const validPassword = await customerData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      console.log('You are now logged in!');
      
  
      req.session.save(() => {
        req.session.firstname = customerData.firstname;
        req.session.lastname = customerData.lastname;
        req.session.logged_in = true;
        req.session.Admin = (customerData.isAdmin == '1') ? true : false;
        req.session.isPremiumMember = (customerData.membership == "premium") ? true : false;
        res.status(200).json(customerData);   
      });

     // res
    //  .status(200)
    //  .json({ user: dbUserData, message: 'You are now logged in!' });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;