const noteService = require('../services/noteService');

async function createNote(req, res, next) {
    try {
        const { city, note} = req.body;
        const username = req.user.username;
        const savedNote = await noteService.createNote(username,city, note);
        res.status(201).json(savedNote);
    } catch (err) {
        next(err);
    }
}

async function getNotes(req, res, next) {
    try {
        const username = req.user.username;
        const notes = noteService.getUserNotes(username);
        res.json(notes);
    } catch (error) {
        next(err);
    }
}

module.exports = { createNote, getNotes};
