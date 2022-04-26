//app6 is routing
const path=require('path');
const express=require('express');
const router=express.Router();//router function
const rootdir=require('../util/path')//importing path
//admin get request
router.get('/add-product',(req,res,next)=>{//specific routes for specific request
    
    //res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add Product</button>');//Allows to to go next middleware in line
    res.sendFile(path.join(rootdir,'viewsscreen','add-product.html'))
})
//admin post request  ,,same path can be used if methhods are different
router.post('/add-product',(req,res,next)=>{//this will trigger only get request
    console.log(req.body);

    //res.redirect('/admin/contact');
})
router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','viewsscreen','contact.html'));
    //res.redirect('/admin/success')
    next();
})
router.post('/admin/success',(req,res,next)=>{
    res.send('<h1>Form submission succesful</h1>');
})
module.exports=router;