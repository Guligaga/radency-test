const colors = require("colors");
const { create } = require("../repositories/notesRepos");
const { getDate, getDatesList } = require("../helpers/date");
const { noteSchema } = require("../helpers/validatiors");

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
    const isCreated = create(data);
    if (isCreated) {
      res.json(isCreated);
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
  res.json({ resp: "updateNote" });
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
