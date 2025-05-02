const { addNote, getNotesByUsername } = require('../repositories/noteRepository');
const weatherService = require('./weatherService');

async function createNote(username, city, note) {
    const weather = await weatherService.getWeather(city);
    return addNote({ username, city, note, weather, createdAt: new Date()});
}

function getUserNotes(username) {
    return getNotesByUsername(username);
}

module.exports = { createNote, getUserNotes };
