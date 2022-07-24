const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

function deleteNoteFromDB(id, notesArray) {
    function checkForId(note) {
        if (note.id.toString() !== id.id) {
            console.log(id.id);
            console.log(typeof id.id);
            console.log(note.id);
            console.log(typeof note.id);
            return note;
        }
    }
    newNotesArr = notesArray.filter(checkForId);
    console.log(newNotesArr)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotesArr }, null, 2)
    );
};

module.exports = { createNewNote, deleteNoteFromDB };