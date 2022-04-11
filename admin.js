//app6 is routing

const express=require('express');
const router=express.Router();//router function
//admin get request
router.get('/add-product',(req,res,next)=>{//specific routes for specific request
    
    res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add Product</button>');//Allows to to go next middleware in line
    
})
//admin post request  ,,same path can be used if methhods are different
router.post('/add-product',(req,res,next)=>{//this will trigger only get request
    console.log(req.body);

    res.redirect('/');
})
module.exports=router;