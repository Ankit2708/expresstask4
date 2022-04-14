const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');Not required now
const productsController=require('../controllers/products')//going just 1 level upwards

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);//getaddproduct is passed here as reference

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports=router;