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

module.exports = router;