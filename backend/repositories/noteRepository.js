const notes = [];

function addNote(note) {
    notes.push(note);
    return note;
}

function getNotesByUsername(username) {
    return notes.filter(n => n.username === username);
}

module.exports = { addNote, getNotesByUsername};