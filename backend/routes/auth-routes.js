const { Router } = require("express");
const { login, user } = require("../controllers/auth-controller");
const validator = require("../middleware/validator");
const { verifyToken } = require("../middleware/verify-token");
const { loginRules } = require("../requests/auth-request");

const router = Router();

router.post("/login", loginRules, validator, login);
router.get("/user", verifyToken, user);

module.exports = router;
