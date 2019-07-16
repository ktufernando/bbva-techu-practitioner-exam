const express = require('express');

const _ = require('underscore');

const Usuario = require('../models/usuario');

const app = express();

app.get('/usuario', (req, res) => {

    Usuario.find({}, 'nombre email')
        .sort('nombre')
        .exec((err, usuarios) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuarios
            });

        });


});

app.post('/usuario', function(req, res) {

    let body = req.body;

    Usuario.find({ email: body.email })
    .exec((err, usuarios) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        let usuario;
        if(!usuarios || !usuarios.length){
            usuario = new Usuario({
                nombre: body.nombre,
                email: body.email
            });
        }else {
            usuario = usuarios[0];
            usuario.nombre = body.nombre
        }

        usuario.save((err, usuarioDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuario: usuarioDB,
            });
    
        });

    });
});

module.exports = app;