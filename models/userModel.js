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
            connection.query('insert into SOLICITUD (NRO_TICKET, NOMBRE_CLIENTE, NRO_DOC, TELEFONO, EMAIL, AREA, DESCRIPCION, ID_USUARIO, ESTADO) values (?,?,?,?,?,?,?,?,"Pendiente")',
                ['', nombreCliente, nrodoc, telefono, email, area, descripcion, idUsuario],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    },

    registroUsuario(nombres, apellidos, area, tipo) {
        return new Promise((resolve, reject) => {
            connection.query('insert into USUARIO (NOMBRES, APELLIDOS, AREA, USERNAME, PASSWORD, ACTIVO, TIPO_USUARIO) values (?,?,?,?,?,?,?)',
                [nombres, apellidos, area, nombres.substring(0, 2) + apellidos.substring(0, 2),
                    Math.floor(Math.random() * (9999 - 1111) + 1111) + 1111, 1, tipo],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        })
    },

    listarUsuarios() {
        return new Promise((resolve, reject) => {
            connection.query('select nombres, apellidos, area, b.tipo_usuario from usuario a inner join tipo_usuario b on a.tipo_usuario = b.id_tipo_usuario where a.tipo_usuario not in (1,2)',
                [],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        })
    },
}