const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('contact', {
        logged_in: req.session.logged_in,
        firstname: req.session.firstname,
        lastname: req.session.lastname,
        Admin: req.session.Admin,
        isPremiumMember: req.session.isPremiumMember
        });
});

module.exports = router;