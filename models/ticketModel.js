const connection = require('../conecction/connection')

module.exports = {
    listTickets(id_usuario) {
        return new Promise((resolve, reject) => {
            connection.query("select a.nro_ticket, estado, nombre_cliente, concat(b.nombres, ' ', b.apellidos) as nombres, descripcion, \
            c.nombre_usuario_asignado, c.fecha_registro, c.hora_inicio, c.fecha_abordaje, \
            c.nombre_usuario_abordaje \
            from solicitud a \
            left join usuario b on a.id_usuario = b.id_usuario  \
            inner join seguimiento c on a.nro_ticket = c.nro_ticket  \
                            where a.area = (select distinct area from usuario where tipo_usuario = ?);",
                [id_usuario],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    reasignarTicket(id_usuario_asignado, nro_ticket) {
        return new Promise((resolve, reject) => {
            connection.query("call SP_REASIGNAR_TICKET(?, ?)",
                [nro_ticket, id_usuario_asignado],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    ticketsPorUsuario(id_usuario) {
        return new Promise((resolve, reject) => {
            connection.query("select trim(NOMBRE_USUARIO_ASIGNADO) persona, count(NRO_TICKET) cantidad \
            from gestsol.seguimiento a \
            inner join gestsol.usuario b \
            on a.id_usuario_asignado = b.id_usuario \
            where b.area = (select distinct area from usuario where tipo_usuario = ?) \
            group by NOMBRE_USUARIO_ASIGNADO;",
                [id_usuario],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                })
        })
    }
}