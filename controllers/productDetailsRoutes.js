const router = require('express').Router();
const { Products } = require('../models');


 router.get('/', async (req, res) => {
    res.render('product-details');
});


router.get('/:id', async (req, res) => {

  try {
  const productData = await Products.findByPk(req.params.id);
   // Serialize data so the template can read it
   const product = productData.get({ plain: true });
   console.log(product);

  res.render('product-details', { 
    logged_in: req.session.logged_in,
    firstname: req.session.firstname,
    lastname: req.session.lastname,
    Admin: req.session.Admin,
    isPremiumMember: req.session.isPremiumMember,
    product 
  });
 
} catch (err) {
  res.status(500).json(err);
}
});



module.exports = router;