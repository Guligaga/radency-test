const colors = require("colors");
const {
  create,
  update,
  deleteFromDB,
  getById,
  getAll,
} = require("../repositories/notesRepos");
const { getDate, getDatesList } = require("../helpers/date");
const {
  noteSchema,
  updateSchema,
  idSchema,
  archivationSchema,
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
  try {
    const { id } = req.params;
    const note = getById(id);

    if (note) {
      res.json(note);
    } else {
      res.status(404).send(`There is no such note with id: ${id}`);
    }
  } catch (err) {
    console.log(err.name.red);
    console.log(err.stack);
    res.status(400).json(err);
  }
}

function getAllNotes(req, res) {
  const notesList = getAll();
  res.json(notesList);
}

function noteArchivation(req, res) {
  try {
    const { id } = req.params;
    const validData = archivationSchema.validateSync(req.body);
    const updated = update(id, validData);

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

function getStats(req, res) {
  const notesList = getAll();
  const stats = Object.values(notesList).reduce((acc, note) => {
    const { category, isArchived } = note;
    const type = isArchived ? "archived" : "active";
    if (!acc[category]) {
      acc[category] = {
        category,
        archived: 0,
        active: 0,
      };
    }
    acc[category][type]++;
    return acc;
  }, {});
  res.json(stats);
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
