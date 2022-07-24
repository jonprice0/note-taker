const router = require('express').Router();
const { createNewNote, deleteNoteFromDB } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log("Reached end-point.");
    deleteNoteFromDB(req.params, notes);
    res.json(notes);
})

module.exports = router;