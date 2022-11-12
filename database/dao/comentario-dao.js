const database = require("../db/dbconfig");
const Comentario = require("../models/comentario");

async function gravarDados(dados) {
  try {
    const novoComentario = await Comentario.create({
      id_problema:dados.id,
      nome:dados.nome,
      desc:dados.texto,
    });
    return true;
  } catch (error) {
    console.log("Erro ao incluir um comentario: "+error)
    return false;
  }
}

async function buscaDados(valor) {
  return await Comentario.findAll({
    where: {
      id_problema: valor,
    },
  });
}

module.exports = {
  gravarDados,
  buscaDados,
};
