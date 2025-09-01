const { Router } = require("express");
const { roles } = require("../controllers/option-controller");

const router = Router();

router.get("/roles", roles);

module.exports = router;
