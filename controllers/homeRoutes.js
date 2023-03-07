const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

  try {

    const homeProductsData = await Products.findAll({
          where: {
                   page: "home"
                 }
    });
   
      // Serialize data so the template can read it
      const products = homeProductsData.map((products) => products.get({ plain: true }));
       
      console.log(req.session.isPremiumMember);

      // Pass serialized data into template
      res.render('home', { 
        logged_in: req.session.logged_in,
        firstname: req.session.firstname,
        lastname: req.session.lastname,
        Admin: req.session.Admin,
        isPremiumMember: req.session.isPremiumMember,
        products
      });

    } catch (err) {
      res.status(500).json(err);
    }
   // res.render('home');
});




// Route for handling requests to /product-details/:id/home
router.get('/:id/home', (req, res) => {
  res.redirect('home');
});


module.exports = router;