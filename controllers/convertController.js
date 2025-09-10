exports.celsiusToFahrenheit = (req, res) => {
  const value = parseFloat(req.params.value);
  const result = (value * 9/5) + 32;
  res.send(`
    <div style="font-family: Arial; background:#f0f8ff; padding:20px; border-radius:10px; width:fit-content;">
      <h2 style="color:#1e90ff;">Conversión Celsius → Fahrenheit</h2>
      <p><b>Valor ingresado:</b> ${value} °C</p>
      <p><b>Resultado:</b> <span style="color:green;">${result} °F</span></p>
    </div>
  `);
};

exports.fahrenheitToCelsius = (req, res) => {
  const value = parseFloat(req.params.value);
  const result = (value - 32) * 5/9;
  res.send(`
    <div style="font-family: Arial; background:#fff0f5; padding:20px; border-radius:10px; width:fit-content;">
      <h2 style="color:#ff1493;">Conversión Fahrenheit → Celsius</h2>
      <p><b>Valor ingresado:</b> ${value} °F</p>
      <p><b>Resultado:</b> <span style="color:green;">${result.toFixed(2)} °C</span></p>
    </div>
  `);
};

exports.kmToMiles = (req, res) => {
  const value = parseFloat(req.params.value);
  const result = value * 0.621371;
  res.send(`
    <div style="font-family: Arial; background:#f5fffa; padding:20px; border-radius:10px; width:fit-content;">
      <h2 style="color:#32cd32;">Conversión Kilómetros → Millas</h2>
      <p><b>Valor ingresado:</b> ${value} km</p>
      <p><b>Resultado:</b> <span style="color:green;">${result.toFixed(2)} millas</span></p>
    </div>
  `);
};
