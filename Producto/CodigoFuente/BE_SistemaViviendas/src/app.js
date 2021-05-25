// Imports
const express = require('express');
const morgan = require('morgan');
const login = require('./routes/login/login.js')



// Inicializar variables
var app = express();



//Configuraciones
//-- Si existe un puerto en el sistema libre, toma ese. En caso contrario, toma el 3001
app.set('puerto', process.env.PORT || 3050);

//Middlewares
app.use(morgan('dev')); //Me muestra un mensaje de tipo dev en la consola
app.use(express.urlencoded({extended:false})); //Para que no se capturen datos de tipo imagen o derivados
app.use(express.json()); //Para que el servidor pueda interpretar json.



//Rutas 
app.use(login);


//Empezar servidor
app.listen(app.get('puerto'), () => {
    console.log('Aplicacion escuchando en puerto: ', app.get('puerto'));
});