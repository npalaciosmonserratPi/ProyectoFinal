// Imports
const express = require('express');
const morgan = require('morgan');


// Inicializar variables
var app = express();


//Configuraciones

//-- Si existe un puerto en el sistema libre, toma ese. En caso contrario, toma el 3001
app.set('puerto', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev')); //Me muestra un mensaje de tipo dev en la consola


//Rutas

// Escuchar peticiones



//Empezar servidor
app.listen(app.get('puerto'), () => {
    console.log('Aplicacion escuchando en puerto: ', app.get('puerto'));
});