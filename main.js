var express=require("express");
var bodyParser = require('body-parser');
var app=express();
const dbSetup=require("./database/db/setup");
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(async () => {
    await dbSetup.init();
  }) ();


const userDao =require("./database/dao/users-dao");
const problemaDao =require("./database/dao/problema-dao");
const comentarioDao =require("./database/dao/comentario-dao");

app.post("/clientes/logar",async function(req,res){
    const usuario = await userDao.buscaDados(req.body.login);
    if (usuario.senha == req.body.senha){
        res.status(201).send("admin");
    } else {
        res.status(200).send("user not found");
    }
});

app.post("/problema/procura",async function(req,res){
    let retorno = await problemaDao.buscaDados(req.body.id)
    res.send(retorno)
});
app.post("/problema/salvar",async function(req,res){
    await problemaDao.gravarDados(req.body.problemaNovo)
    res.status(201).send("Created");
});
app.post("/problema/atualizar",async function(req,res){
    await problemaDao.atualizaDados(req.body)
    res.status(201).send("Updated");
});

app.post("/problema/todos",async function(req,res){
    let retorno = await problemaDao.buscaTodosDados();
    res.send(retorno);
})
app.post("/comentario/procura",async function(req,res){
    var retorno = await comentarioDao.buscaDados(req.body.id)
    res.send(retorno)
});
app.post("/comentario/novo", function(req,res){
    comentarioDao.gravarDados(req.body)
    res.status(201).send("Updated");
});
app.listen(PORT,function(){
    console.log("Servidor-Backend está rodando na porta: "+PORT);
})
