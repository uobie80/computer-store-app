const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

    try {
  
      const ultrabooksProductsData = await Products.findAll({
            where: {
                     page: "ultrabooks"
                   }
      });
     
        // Serialize data so the template can read it
        const products = ultrabooksProductsData.map((products) => products.get({ plain: true }));
  
        // Pass serialized data into template
        res.render('ultrabooks', { 
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
     
  });

module.exports = router;