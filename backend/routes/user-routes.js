const { Router } = require("express");
const {
  index,
  store,
  findUserById,
  update,
  show,
  destroy,
} = require("../controllers/user-controller");
const validator = require("../middleware/validator");
const {
  createUserRules,
  updateUserRules,
} = require("../requests/user-request");

const router = Router();

router.get("/", index);
router.post("/", createUserRules, validator, store);
router.get("/:id", findUserById, show);
router.put("/:id", findUserById, updateUserRules, validator, update);
router.delete("/:id", findUserById, destroy);

module.exports = router;
