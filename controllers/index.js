const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const alllaptopsRoutes = require('./alllaptopsRoutes');
const doneRoutes = require('./doneRoutes');
const macbookRoutes = require('./macbookRoutes');
const orderRoutes = require('./orderRoutes');
const productDetailsRoutes = require('./productDetailsRoutes');
const signupRoutes = require('./signupRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const ultrabooksRoutes = require('./ultrabooksRoutes');
const ultraportablesRoutes = require('./ultraportablesRoutes');
const contactRoutes = require('./contactRoutes');
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');


//router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

router.use('/', homeRoutes);
router.use('/home', homeRoutes);
router.use('/login', loginRoutes);
router.use('/alllaptops', alllaptopsRoutes);
router.use('/done', doneRoutes);
router.use('/macbooks', macbookRoutes);
router.use('/order', orderRoutes);
router.use('/product-details', productDetailsRoutes);
router.use('/signup', signupRoutes);
router.use('/subscription', subscriptionRoutes);
router.use('/ultrabooks', ultrabooksRoutes);
router.use('/ultraportables', ultraportablesRoutes);
router.use('/contact', contactRoutes);
router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;