const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Comentario=database.define('comentario',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    id_problema:{
        type:Sequelize.INTEGER(100),
        allowNull:false,
    },
    nome:{
        type:Sequelize.STRING(100),
        allowNull:false,
        default:"Anonimo",
    },
    desc:{
        type:Sequelize.STRING(300),
        allowNull:false,
    },
});
module.exports=Comentario;