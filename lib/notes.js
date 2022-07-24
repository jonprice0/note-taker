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
    // Return a note if it doesn't match the note to be deleted:
    function checkForId(note) {
        if (note.id.toString() !== id) {
            return note;
        }
    };
    // Create a new array of the remaining notes:
    newNotesArr = notesArray.filter(checkForId);
    // Write that array to the DB file:
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotesArr }, null, 2)
    );
    return newNotesArr;
};

module.exports = { createNewNote, deleteNoteFromDB };