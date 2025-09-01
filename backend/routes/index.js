const { Router } = require("express");
const { verifyToken } = require("../middleware/verify-token");
const { adminAuthorization } = require("../middleware/authorize");

const router = Router();

const authRoutes = require("./auth-routes");
const optionRoutes = require("./option-routes");
const userRoutes = require("./user-routes");
const weatherRoutes = require("./weather-routes");

router.use("/auth", authRoutes);
router.use("/options", verifyToken, optionRoutes);
router.use("/users", verifyToken, adminAuthorization, userRoutes); // THIS WILL ONLY ACCESS BY USER WITH ROLE_ID OF 1
router.use("/weather", verifyToken, weatherRoutes);
module.exports = router;
