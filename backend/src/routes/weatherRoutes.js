const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");
const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get("/", authMiddleware, authorize("admin", "user"), weatherController.getWeather);

module.exports = router;