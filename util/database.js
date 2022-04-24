const Sequelize=require('sequelize');//class or constructor function
const sequelize=new Sequelize('nodecomplete', 'root', '2708@@1991As',{
    dialect : 'mysql',
    host : 'localhost'
})
module.exports = sequelize;//fully configured sequelize pool environment