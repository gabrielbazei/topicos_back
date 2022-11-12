const {database,check}=require("./dbconfig");
const Comentario=require("../models/comentario");
const Problema=require("../models/problema");
const Users=require("../models/users");

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
   
}

module.exports={init};