const DB = require("../database/database");

function create(noteObj) {
  const { id } = noteObj;
  DB[id] = noteObj;
  //   return false;
  return DB[id];
}

module.exports = {
  create,
};
