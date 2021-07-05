const express = require("express");
const router = express.Router();

const {
  createNote,
  updateNote,
  deleteNote,
  getNote,
  getAllNotes,
  noteArchivation,
  getStats,
} = require("../services/notesService");

router.post("/", createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/stats", getStats);
router.get("/:id", getNote);
router.get("/", getAllNotes);
router.patch("/:id", noteArchivation);

module.exports = router;
