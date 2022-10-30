var express=require("express");
var bodyParser = require('body-parser');
//const database=require("./database/database.local");
//middleware - irá fazer um parser do dados do front e formatar em req.body
var app=express();
//const PORT=3000;
const PORT = process.env.PORT || 3000
//define o uso do body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/clientes/logar", function(req,res){
    console.log(req.body);

    if (req.body.login == "admin" && req.body.senha == "admin"){
        res.status(201).send("admin");
    } else {
        res.status(200).send("user not found");
    }
});
app.post("/problema/procura", function(req,res){
    var retorno = {
        titulo: "John",
        situacao: 3,
        local: ":P dunno",
        desc: "blueblueblueblueblueblueblueblue"
    };
    res.send(retorno)
});
app.post("/problema/salvar", function(req,res){
    console.log(req.body)
    res.status(201).send("Created");
});
app.post("/problema/atualizar", function(req,res){
    console.log(req.body)
    res.status(201).send("Updated");
});

app.post("/problema/todos", function(req,res){
    var retorno= [];
    var problema1 = {
        id:1,
        titulo:"Testando titulo 1",
        local:"Testando local 1",
        //3 andamento, 2 fechada, 1 aberta
        situacao: 2
    }
    retorno.push(problema1);
    var problema2 = {
        id:2,
        titulo:"Testando titulo 2",
        local:"Testando local 2",
        //3 andamento, 2 fechada, 1 aberta
        situacao: 3
    }
    retorno.push(problema2);
    var problema3 = {
        id:3,
        titulo:"Testando titulo 3",
        local:"Testando local 3",
        //3 andamento, 2 fechada, 1 aberta
        situacao: 1
    }
    retorno.push(problema3);
    res.send(retorno);
})
app.post("/comentario/procura", function(req,res){
    var retorno = [];
    var coment1 = {
        desc:"testestestestestestes",
        nome:"test"
    }
    retorno.push(coment1)
    var coment2 = {

        desc:"coment2coment2coment2coment2coment2coment2",
        nome:"coment2"
    }
    retorno.push(coment2)
    res.send(retorno)
});
app.post("/comentario/novo", function(req,res){
    console.log(req.body)
    res.status(201).send("Updated");
});
app.listen(PORT,function(){
    console.log("Servidor-Backend está rodando na porta: "+PORT);
})
