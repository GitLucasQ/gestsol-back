const connection = require('../conecction/connection')

module.exports = {
    listTickets(id_usuario) {
        return new Promise((resolve, reject) => {
            connection.query("select a.nro_ticket, estado, nombre_cliente, concat(b.nombres, ' ', b.apellidos) as nombres, descripcion, \
            c.nombre_usuario_asignado, c.fecha_registro, c.fecha_abordaje, \
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
    }
}