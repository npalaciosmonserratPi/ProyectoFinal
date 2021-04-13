// Imports
const express = require('express');


// Inicializar variables
var app = express();

//Rutas

// Escuchar peticiones
app.listen(3001, () => {
    console.log("Express esta corriendo");
});
