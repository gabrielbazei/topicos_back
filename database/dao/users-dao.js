const database = require("../db/dbconfig");
const Users = require("../models/users");


async function buscaDados(valor) {
  return await Users.findOne({
    where: {
      login: valor
    },
  }
  );
}

module.exports = {
  buscaDados,
};
