const express = require("express");
const app = express();
const PORT = 3000;

// Importar rutas
const convertRoutes = require("./routes/convertRoutes");

// Usar las rutas
app.use("/convert", convertRoutes);

// ✅ Nueva ruta para listar las rutas disponibles
app.get("/convert", (req, res) => {
  res.json({
    message: "Rutas de conversión disponibles",
    routes: {
      "Celsius a Fahrenheit": "/convert/celsius-to-fahrenheit/:value",
      "Fahrenheit a Celsius": "/convert/fahrenheit-to-celsius/:value",
      "Kilómetros a Millas": "/convert/km-to-miles/:value"
    }
  });
});

// Ruta de prueba raíz
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
