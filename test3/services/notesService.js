function createNote(req, res) {
  res.json({ resp: "createNote" });
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
