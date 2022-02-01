const express = require('express');
const router = express.Router();


//@descript /page after succeful loging
//@ GET /invoice/

router.get('/', (req, res) => {
    res.render('invoice');
});

///Mapping fuction 
function Map(Descript,rate,quantity){

const newProducts=Descript.map((v,i)=>({
  descript: Descript[i],
  rate:rate[i],
  qty:quantity[i],
  amount: rate[i]*quantity[i]
}));
 return newProducts;

}
//@descript /create invoice 
//@ GET /invoice/create

router.post('/create', (req, res) => {
    if (Array.isArray(req.body.descript)) {
        const product=Map(req.body.descript,req.body.rate,req.body.qty);
        req.body.product=product;
        
       console.log(req.body);
    };
});
module.exports = router;