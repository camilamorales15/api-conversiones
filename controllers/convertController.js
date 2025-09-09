exports.celsiusToFahrenheit = (req, res) => {
    const value = parseFloat(req.params.value);
    const fahrenheit = (value * 9/5) + 32;
    res.json({ celsius: value, fahrenheit });
  };
  
  exports.fahrenheitToCelsius = (req, res) => {
    const value = parseFloat(req.params.value);
    const celsius = (value - 32) * 5/9;
    res.json({ fahrenheit: value, celsius });
  };
  
  exports.kmToMiles = (req, res) => {
    const value = parseFloat(req.params.value);
    const miles = value * 0.621371;
    res.json({ kilometros: value, millas: miles });
  };
  