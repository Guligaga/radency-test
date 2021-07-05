const colors = require("colors");
const { create, update, deleteFromDB } = require("../repositories/notesRepos");
const { getDate, getDatesList } = require("../helpers/date");
const {
  noteSchema,
  updateSchema,
  idSchema,
} = require("../helpers/validatiors");

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
    const validData = noteSchema.validateSync(req.body);
    const { content } = validData;
    const datesList = getDatesList(content);
    const updated = update(id, { ...validData, datesList });

    if (updated === "No ID") {
      res.status(404).send(`There is no such note with id: ${id}`);
    } else if (!updated) {
      res.status(500).send("Something went wrong");
    } else {
      res.json(updated);
    }
  } catch (err) {
    console.log(err.name.red);
    console.log(err.stack);
    res.status(400).json(err);
  }
}

function deleteNote(req, res) {
  console.log(req.params);
  try {
    const { id } = req.params;
    const isDeleted = deleteFromDB(id);
    if (isDeleted) {
      res.json(isDeleted);
    } else {
      res.status(500).send("Something went wrong");
    }
  } catch (err) {
    console.log(err.name.red);
    console.log(err.stack);
    res.status(400).json(err);
  }
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
