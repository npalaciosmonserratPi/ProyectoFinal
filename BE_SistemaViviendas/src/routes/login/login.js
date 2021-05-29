const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');
const mysql = require('../../../db/conexion');

const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;

routes.get('/login', (req,res) =>{
    mysql.query('Select * from Usuario', (err,rows,fields) =>{
        if(err) throw err;
        res.json(rows);
    })  
});

routes.post('/login', (req,res) =>{
    passport.authenticate('local.login');
    console.log(req.body);
});

passport.use('local.login', new PassportLocal({
    usernameField: 'userName',
    passwordField: 'password'
},async (req,userName,password,done)=>{
console.log(req.body);
}));

module.exports = routes;