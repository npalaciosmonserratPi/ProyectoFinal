// Imports
const bodyParser = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 3050;

// Inicializar variables
var app = express();

app.use(bodyParser.json());

//Rutas
var loginRoutes = require('./components/Atuh/login.router');

app.use('/login', loginRoutes);

// Escuchar peticiones
app.listen(PORT, () => {
    console.log(`Express esta corriendo ${PORT}`);
});
