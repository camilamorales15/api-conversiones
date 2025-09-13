const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Conversión de Celsius a Fahrenheit
app.get('/convert/celsius-to-fahrenheit/:value', (req, res) => {
    const celsius = parseFloat(req.params.value);
    if (isNaN(celsius)) {
        return res.status(400).json({ error: 'El valor debe ser un número' });
    }
    const fahrenheit = (celsius * 9/5) + 32;
    res.json({
        original: celsius,
        converted: parseFloat(fahrenheit.toFixed(2)),
        unit: "°F"
    });
});

// Conversión de Fahrenheit a Celsius
app.get('/convert/fahrenheit-to-celsius/:value', (req, res) => {
    const fahrenheit = parseFloat(req.params.value);
    if (isNaN(fahrenheit)) {
        return res.status(400).json({ error: 'El valor debe ser un número' });
    }
    const celsius = (fahrenheit - 32) * 5/9;
    res.json({
        original: fahrenheit,
        converted: parseFloat(celsius.toFixed(2)),
        unit: "°C"
    });
});

// Conversión de Kilómetros a Millas
app.get('/convert/km-to-miles/:value', (req, res) => {
    const km = parseFloat(req.params.value);
    if (isNaN(km)) {
        return res.status(400).json({ error: 'El valor debe ser un número' });
    }
    const miles = km * 0.621371;
    res.json({
        original: km,
        converted: parseFloat(miles.toFixed(2)),
        unit: "millas"
    });
});

// Ruta principal - Mostrar solo un mensaje simple
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>API de Conversión de Unidades</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    background-color: #f5f5f5; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    height: 100vh; 
                    margin: 0; 
                }
                .container { 
                    text-align: center; 
                    background: white; 
                    padding: 2rem; 
                    border-radius: 10px; 
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
                }
                h1 { color: #6c5ce7; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>API de Conversión de Unidades</h1>
                <p>Esta API está funcionando correctamente.</p>
                <p>Usa los endpoints correspondientes para realizar conversiones.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('═'.repeat(60));
    console.log('🚀 API DE CONVERSIÓN DE UNIDADES INICIADA CORRECTAMENTE');
    console.log('═'.repeat(60));
    console.log(`📍 Acceso local:    http://localhost:${port}`);
    console.log('═'.repeat(60));
    console.log('📋 Endpoints disponibles:');
    console.log(`   • http://localhost:${port}/convert/celsius-to-fahrenheit/:value`);
    console.log(`   • http://localhost:${port}/convert/fahrenheit-to-celsius/:value`);
    console.log(`   • http://localhost:${port}/convert/km-to-miles/:value`);
    console.log('═'.repeat(60));
    console.log('⏹️  Para detener el servidor: Presiona Ctrl + C');
    console.log('═'.repeat(60));
});