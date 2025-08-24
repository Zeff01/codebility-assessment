const express = require("express");
const { query } = require("express-validator");
const { getWeather } = require("../controllers/weather.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  [query("city").notEmpty().withMessage("City query param is required")],
  validate,
  getWeather
);

module.exports = router;
