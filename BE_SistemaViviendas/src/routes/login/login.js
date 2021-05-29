const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');
const mysql = require('../../../db/conexion');

const queryBD = require('./querys');

routes.get('/login', (req,res) =>{
    mysql.query('Select * from Usuario', (err,rows,fields) =>{
        if(err) throw err;
        res.json(rows);
    })  
});

routes.post('/login',(req,res)=>{
    const {userName, password} = req.body;
    mysql.query(queryBD.queryLogin(userName, password),(err,rows,fields) =>{
        if(err)throw err;
        if(rows.length > 0){
           let data = JSON.stringify(rows[0]);
           const token = jwt.sign(data,'secretWord');

          res.json({
            ok: true,
            message: 'Credenciales correctas',
            user: userName,
            token: token
        });
           
           
        }else{
            res.status(401).json({
                ok: false,
                message: 'No se obtuvo respuesta por parte del servidor',
            });
            
        }
})});


//Verificación del token


module.exports = routes;