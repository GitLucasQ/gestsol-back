const connection = require('../conecction/connection')

module.exports = {
    listTickets(id_usuario) {
        return new Promise((resolve, reject) => {
            connection.query("select nro_ticket, estado, nombre_cliente, concat(b.nombres, ' ', b.apellidos) as nombres, descripcion \
                            from solicitud a left join usuario b on a.id_usuario = b.id_usuario  \
                            where a.area = (select distinct area from usuario where tipo_usuario = ?);",
                [id_usuario],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    }
}