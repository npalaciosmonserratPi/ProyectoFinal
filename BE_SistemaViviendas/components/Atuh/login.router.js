// REQUIRED
const express = require('express');
var bcrypt = require('bcryptjs');
const conn = require('../../config/config_db');

const app = express();

//querys centralizadas
const queryBD = require('./login.query');

//POST
app.post('/', (req, res) => {

    const queryLog = queryBD.queryLogin(req);

    conn.query(queryLog, (error, result) => {
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
