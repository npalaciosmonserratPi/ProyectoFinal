//RUTAS, METODOS A LA BASE DE DATOS
const express = require('express');
const conn = require('../../config/config');

const login = require('./login.model');
const app = express();

//GET
app.post('/', (req, res) => {

    const query = `SELECT * FROM users WHERE userName = '${req.body.userName}' and password = '${req.body.password}'`;

    conn.query(query, (error, result) => {
        if(error) throw error;

        if(result.length > 0){
            res.status(200).json({
                ok: true,
                message: 'Credenciales correctas',
                user: result
            });
        }
        else {
            res.status(401).json({
                ok: false,
                message: 'Credenciales incorrectas'
            });
        }
    });
});


//EXPORT
module.exports = app
