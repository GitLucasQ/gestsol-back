const express = require('express')
const router = express.Router()

const ticketModel = require('../models/ticketModel')

router.post('/ticket/listTickets', (req, res) => {
    const id_usuario = req.body.id_usuario
    ticketModel.listTickets(id_usuario)
        .then(tickets => {
            res.json({
                tickets: tickets
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo tickets");
        })
});



module.exports = router;