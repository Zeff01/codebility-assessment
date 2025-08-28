const { Router } = require("express");
const { getMyWeather } = require("../controllers/weather-controller");

const router = Router();

router.get("/", getMyWeather);

module.exports = router;
