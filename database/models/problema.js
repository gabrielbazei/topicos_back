const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Problema=database.define('problema',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    titulo:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    situacao:{
        type:Sequelize.INTEGER(1),  
        allowNull:false,
    },
    local:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    desc:{
        type:Sequelize.STRING(300),
        allowNull:false,
    },
});
module.exports=Problema;