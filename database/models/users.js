const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Users=database.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    login:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    senha:{
        type:Sequelize.STRING(257),
        allowNull:false,
    },
});
module.exports=Users;