const router = require('express').Router();
const { createNewNote, deleteNoteFromDB } = require('../../lib/notes');
let { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    notes = (deleteNoteFromDB(req.params.id, notes));
    res.json(notes);
})

module.exports = router;