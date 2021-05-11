const connection = require('../conecction/connection')

module.exports = {
    login(username, password) {
        return new Promise((resolve, reject) => {
            connection.query('select * from usuario where username = ? and `password` = ?;',
                [username, password],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    registroConsulta(nombreCliente, nrodoc, telefono, email, area, descripcion, idUsuario) {
        return new Promise((resolve, reject) => {
            connection.query('insert into SOLICITUD (NRO_TICKET, NOMBRE_CLIENTE, NRO_DOC, TELEFONO, EMAIL, AREA, DESCRIPCION, ID_USUARIO) values (?,?,?,?,?,?,?,?)',
                ['', nombreCliente, nrodoc, telefono, email, area, descripcion, idUsuario],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },
}