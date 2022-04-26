const path=require('path');//gives absolute path of project folder
const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(__dirname,'../','viewsscreen','shop.html'))//it will join the pathof html and js
    //path join detects os and chose correct path for it
})
module.exports=router;