const mysql=require('mysql2');
const pool= mysql.createPool({//it will create pool of connections
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password:'2708@@1991As'
})
module.exports=pool.promise()