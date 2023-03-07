const router = require('express').Router();
const { Customers, Products } = require('../models');


router.get('/', async (req, res) => {

    res.render('dashboard', {
        logged_in: req.session.logged_in,
        firstname: req.session.firstname,
        lastname: req.session.lastname,
        Admin: req.session.Admin,
        isDashboard: true,
        isPremiumMember: req.session.isPremiumMember
        });
});



router.get('/c_membership', async (req, res) => {

    try {

      const premium_users = await Customers.count({
        where: { membership: "premium" },
      });


      const free_users = await Customers.count({
        where: { membership: "free" },
      });

     let data = JSON.stringify({"results" : [premium_users, free_users ]});

      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  });

  router.get('/c_state', async (req, res) => {

    try {

      const ny_customers = await Customers.count({
        where: { state: "New York" },
      });

      const tx_customers = await Customers.count({
        where: { state: "Texas" },
      });

      const nj_customers = await Customers.count({
        where: { state: "New Jersey" },
      });

      const cal_customers = await Customers.count({
        where: { state: "California" },
      });

      const il_customers = await Customers.count({
        where: { state: "Illinois" },
      });

      const ga_customers = await Customers.count({
        where: { state: "Georgia" },
      });

     let data = JSON.stringify({"results" : [ny_customers, tx_customers, nj_customers, cal_customers, 
        il_customers, ga_customers ]});

      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  });

  router.get('/c_subscription', async (req, res) => {

    try {

      const subscribers = await Customers.count({
        where: { subscription: "Yes" },
      });


      const nonsubscribers = await Customers.count({
        where: { subscription: "No" },
      });

     let data = JSON.stringify({"results" : [subscribers, nonsubscribers ]});

      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  });


  router.get('/ivnt_by_brand', async (req, res) => {

    try {

      const macbook = await Products.count({
        where: { make: "MacBook Pro" },
      });
      const dell = await Products.count({
        where: { make: "Dell" },
      });
      const lenovo = await Products.count({
        where: { make: "Lenovo ThinkPad" },
      });
      const acer = await Products.count({
        where: { make: "Acer" },
      });
      const hp = await Products.count({
        where: { make: "HP" },
      });
     

     let data = JSON.stringify({"results" : [ macbook, dell, lenovo, acer, hp ]});

      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  });



module.exports = router;