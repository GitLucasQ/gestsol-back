const express = require('express')
const router = express.Router()

const userModel = require('../models/userModel')

router.post('/user/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    userModel.login(username, password)
        .then(usuario => {
            res.json({
                status: 200,
                usuario: usuario
            })
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo usuario");
        });
});

router.post('/registroConsulta', (req, res) => {
    const nombreCliente = req.body.nombreCliente
    const nroDoc = req.body.nroDoc
    const telefono = req.body.telefono
    const email = req.body.email
    const area = req.body.area
    const descripcion = req.body.descripcion
    const idUsuario = req.body.idUsuario

    userModel.registroConsulta(nombreCliente, nroDoc, telefono, email, area, descripcion, idUsuario)
        .then(registro => {
            res.json({
                status: 200
            })
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo usuario");
        });
});

module.exports = router;