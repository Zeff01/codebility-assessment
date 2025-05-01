const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const { getWeather } = require("../services/weatherService");

const notes = []; // in-memory notes

router.post("/", authenticateToken, async (req, res) => {
  const { city, note } = req.body;
  const weather = await getWeather(city);

  const newNote = {
    username: req.user.username,
    city,
    note,
    weather,
    createdAt: new Date(),
  };
  notes.push(newNote);

  res.json(newNote);
});

router.get('/',authenticateToken, (req, res) => {
    const userNotes = notes.filter(note => note.username === req.user.username);
    res.json(userNotes);
});

module.exports = router;
