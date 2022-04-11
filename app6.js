const express=require('express')
const bodyParser=require('body-parser');//importing body parser
const app=express();
const adminRoutes =require('./routes/admin');//express is exported as a function in node
const shopRoutes=require('./routes/shop')



app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoutes);//only object type passing is required and order matters
app.use(shopRoutes)
app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')//status will return the status of query
})
app.listen(3000);