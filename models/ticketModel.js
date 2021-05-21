const connection = require('../conecction/connection')

module.exports = {
    listTickets() {
        return new Promise((resolve, reject) => {
            connection.query('select nro_ticket, nombre_cliente, nro_doc, descripcion from solicitud;',
                [],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    }
}