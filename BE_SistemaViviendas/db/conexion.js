const conexion = require('./config');

conexion.connect(error => {
    if(error) throw error;
    console.log('La conexión se realizó con éxito')
});

module.exports = conexion;