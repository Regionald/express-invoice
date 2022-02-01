const express=require('express');
const router=express.Router();

//@descript /creata a cashflow statement and download
//@ GET /cashflow/

router.get('/',(req,res)=>{
    res.render('cashflow');
});

module.exports=router;