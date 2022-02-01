const express = require('express');
const router = express.Router();
const passHash = require('password-hash');


//@descript login/landing page
//@ GET /

router.get('/', async (req, res) => {
    res.render('login', { layout: 'login' });

});

//@descript /page after succeful loging
//@ GET /invoice/
router.get('/home', async (req, res) => {
    res.render('index');
});

//@descript PASS IN EMAIL AND PASSWORD
//@ POST /


router.post('/', (req, res) => {

    
    //  passHash.verify(req.body.password,user[i].password)
    res.redirect('/')

});
module.exports = router;