const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static('public'));

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log('═'.repeat(60));
    console.log('API DE CONVERSIÓN DE UNIDADES INICIADA CORRECTAMENTE');
    console.log('═'.repeat(60));
    console.log(`Acceso local:    http://localhost:${port}`);
    console.log('═'.repeat(60));
    console.log('Para detener el servidor: Presiona Ctrl + C');
    console.log('═'.repeat(60));
});
