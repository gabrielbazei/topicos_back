const database = require("../db/dbconfig");
const Problema = require("../models/problema");


async function gravarDados(dados) {
  try {
    const novoProblema = await Problema.create({
      titulo: dados.titulo,
      email: dados.email,
      situacao:dados.situacao,
      local:dados.local,
      desc:dados.desc
    });
    return true;
  } catch (error) {
    console.log("Erro ao incluir um problema: "+error)
    return false;
  }
}
async function atualizaDados(dados) {
    try {
      const atualizaProblema = await Problema.update({
        situacao:dados.situacao,
      },{
        where: {id: dados.id}
    });
      return true;
    } catch (error) {
      console.log("Erro ao incluir um cliente: "+error)
      return false;
    }
  }

async function buscaTodosDados() {
  return await Problema.findAll();
}

async function buscaDados(valor) {
  return await Problema.findOne({
    where: {
      id: valor,
    },
  });
}

module.exports = {
  gravarDados,
  buscaDados,
  buscaTodosDados,
  atualizaDados
};
