const router = require('express').Router();
const { addNotes, getNotes, deleteNote } = require('../controller/NoteController');

router.post("/add-notes", addNotes);

router.get('/get-notes', getNotes);

router.delete("/delete-notes/:id", deleteNote);


module.exports = router;