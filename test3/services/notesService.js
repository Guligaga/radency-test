const colors = require("colors");
const { create, update } = require("../repositories/notesRepos");
const { getDate, getDatesList } = require("../helpers/date");
const { noteSchema, updateSchema } = require("../helpers/validatiors");

function createNote(req, res) {
  try {
    const validData = noteSchema.validateSync(req.body);
    const { content } = validData;
    const data = {
      ...validData,
      id: Date.now(),
      date: getDate(),
      datesList: getDatesList(content),
      isArchived: false,
    };
    const created = create(data);
    if (created) {
      res.json(created);
    } else {
      res.status(500).send("Something went wrong");
    }
  } catch (err) {
    console.log(err.name.red);
    console.log(err.stack);
    res.status(400).json(err);
  }
}

function updateNote(req, res) {
  try {
    const { id } = req.params;
    const validData = updateSchema.validateSync(req.body);
    const { content } = validData;
    const datesList = getDatesList(content);

    const updated = update(id, { ...validData, datesList });
    if (updated) {
      res.json(updated);
    } else {
      res.status(500).send("Something went wrong");
    }
  } catch (err) {
    console.log(err.name.red);
    console.log(err.stack);
    res.status(400).json(err);
  }
}
function deleteNote(req, res) {
  res.json({ resp: "deleteNote" });
}
function getNote(req, res) {
  res.json({ resp: "getNote" });
}
function getAllNotes(req, res) {
  res.json({ resp: "getAllNotes" });
}
function noteArchivation(req, res) {
  res.json({ resp: "noteArchivation" });
}
function getStats(req, res) {
  res.json({ resp: "getStats" });
}

module.exports = {
  createNote,
  updateNote,
  deleteNote,
  getNote,
  getAllNotes,
  noteArchivation,
  getStats,
};
