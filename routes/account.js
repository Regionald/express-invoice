const express=require('express');
const router=express.Router();
const multer  = require('multer');
const passHash=require('password-hash');
const connection=require('../config/connectDB');

//@descript multer setup
const storage=multer.diskStorage({destination:'uploads/',
filename:function(req,file,callback){
  callback(null,file.originalname);
}
}); 
const upload=multer({storage:storage});

//@descript login/landing page
//@ POST /account/create
router.post('/create',upload.single('logoName'),(req,res)=>{

    req.body.logoName=req.file.filename;
    req.body.password=passHash.generate(req.body.password);

    console.log(req.body);
    const {email,password,companyName,companyAddress,town,postalCode,accountNumber,logoName}=req.body;

    connection.query('INSERT INTO users SET ?', {email:email,
      password:password,
      companyName:companyName,
      companyAddress:companyAddress,
      town:town,
      postalCode:postalCode,
      accountNumber:accountNumber,
      logoName:logoName,
      verified:1
    }, function (error, results, fields) {
      if (error) { console.log(error) };
    });

    res.redirect('/');
});
module.exports=router;