const express=require('express');
const router=express.Router();


//@descript /page to view historical customers
//@ GET /customers/

router.get('/',(req,res)=>{
    res.render('customers');
});
module.exports=router;