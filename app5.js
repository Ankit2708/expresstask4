//const http=require('http')
const express=require('express');
const app=express();//express is exported as a function in node
const bodyParser=require('body-parser');//importing body parser

app.use(bodyParser.urlencoded({extended:false}))//body parser and it should always happen 
app.use('/add-product',(req,res,next)=>{//specific routes for specific request
    
    res.send('<form action="/product" method="post"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button>');//Allows to to go next middleware in line
    
})
app.post('/product',(req,res,next)=>{//this will trigger only post request
    console.log(req.body);

    res.redirect('/');
})
// app.use('/product',(req,res,next)=>{//this will trigger both get and post request
//     console.log(req.body);

//     res.redirect('/');//it will redirect to the page
// })
app.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello from Express</h1>');
    //res.send({key1:value});
})
// const server=http.createServer(app);

// server.listen(3000);
app.listen(3000);