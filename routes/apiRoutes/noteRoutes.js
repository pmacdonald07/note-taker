const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { findById, createNewNote, deleteNote } = require("../../lib/notes");
const uuid = require("uuid");

router.get("/notes", (req, res) => {
  //let results = notes;
  res.json(notes);
});

router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  req.body.id = uuid.v4();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  deleteNote(id);
  res.json();
});

module.exports = router;
