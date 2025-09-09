const express = require("express");
const router = express.Router();
const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kmToMiles
} = require("../controllers/convertController");

router.get("/celsius-to-fahrenheit/:value", celsiusToFahrenheit);
router.get("/fahrenheit-to-celsius/:value", fahrenheitToCelsius);
router.get("/km-to-miles/:value", kmToMiles);

module.exports = router;
