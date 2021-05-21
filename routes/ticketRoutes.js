const express = require('express')
const router = express.Router()

const ticketModel = require('../models/ticketModel')

router.get('/ticket/listTickets', (req, res) => {
    ticketModel.listTickets()
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