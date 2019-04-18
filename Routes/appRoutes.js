const express = require("express");
const router = express.Router();

router.use("/station", require("./StationRoutes"));
// router.use('/weather', require("./WeatherRoutes"));

module.exports = router;