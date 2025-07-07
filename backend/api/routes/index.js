const express = require('express');
const userRoute = require('./user.route');
const weatherRoute = require('./weather.route');

const router = express.Router();

router.use('/auth', userRoute);
router.use('/weather', weatherRoute);

module.exports = router;
