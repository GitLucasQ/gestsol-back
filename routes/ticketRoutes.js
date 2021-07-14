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

router.put('/ticket/reasignarTicket', (req, res) => {
    const id_usuario_asignado = req.body.id_usuario_asignado
    const nro_ticket = req.body.nro_ticket
    ticketModel.reasignarTicket(id_usuario_asignado, nro_ticket)
        .catch(err => {
            return res.status(500).send("Error actualizando ticket");
        })
});

router.post('/ticket/ticketsPorUsuario', (req, res) => {
    const id_usuario = req.body.id_usuario
    ticketModel.ticketsPorUsuario(id_usuario)
        .then(resultado => {
            res.json({
                resultado: resultado
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo resultado");
        })
});

router.post('/ticket/promedioAbordaje', (req, res) => {
    const id_usuario = req.body.id_usuario
    ticketModel.promedioAbordaje(id_usuario)
        .then(promedio => {
            res.json({
                promedio: promedio
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo datos");
        })
});

router.post('/ticket/promedioFinalizacion', (req, res) => {
    const id_usuario = req.body.id_usuario
    ticketModel.promedioFinalizacion(id_usuario)
        .then(promedio => {
            res.json({
                promedio: promedio
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo datos");
        })
})



module.exports = router;