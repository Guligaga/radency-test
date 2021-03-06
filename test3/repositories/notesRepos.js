const DB = require("../database/database");

function create(data) {
  const { id } = data;
  DB[id] = data;
  return DB[id];
}

function update(id, newData) {
  if (!DB[id]) {
    return "NoID";
  }
  const data = DB[id];
  DB[id] = { ...data, ...newData };
  return DB[id];
}

function deleteFromDB(id) {
  delete DB[id];
  return DB[id] ? false : true;
}

function getById(id) {
  return DB[id];
}

function getAll(id) {
  return DB;
}

module.exports = {
  create,
  update,
  deleteFromDB,
  getById,
  getAll,
};
