const DB = require("../database/database");

function create(data) {
  const { id } = data;
  DB[id] = data;
  return DB[id];
}

function update(id, newData) {
  const data = DB[id];
  DB[id] = { ...data, ...newData };
  return DB[id];
}

module.exports = {
  create,
  update,
};
