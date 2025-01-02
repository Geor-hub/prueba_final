const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola mundo, bienvenidos soy Geornela desde Node.js! Estoy practicando cambios para probar el despliegue automático de la nueva imagen en ECS');
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
    }
});

app.get('/healthcheck/liveness', async (req, res) => {
    try {
        res.status(200).send();
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app;