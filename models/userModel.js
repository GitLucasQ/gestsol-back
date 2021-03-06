const connection = require('../conecction/connection')

module.exports = {
    login(username, password) {
        return new Promise((resolve, reject) => {
            connection.query('select * from usuario where username = ? and `password` = sha1(?);',
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

    registroUsuario(nombres, apellidos, area, clave, tipo) {
        return new Promise((resolve, reject) => {
            connection.query('insert into USUARIO (NOMBRES, APELLIDOS, AREA, USERNAME, PASSWORD, ACTIVO, TIPO_USUARIO) values (?,?,?,?,sha1(?),?,?)',
                [nombres, apellidos, area, nombres.substring(0, 2) + apellidos.substring(0, 2),
                    clave, 1, tipo],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        })
    },

    listarUsuarios(idUsuario) {
        return new Promise((resolve, reject) => {
            connection.query('select a.id_usuario, nombres, apellidos, area, b.tipo_usuario from usuario a \
            inner join tipo_usuario b on a.tipo_usuario = b.id_tipo_usuario \
            where a.tipo_usuario not in (1,2) and \
            a.area = (select distinct area from usuario where tipo_usuario = ?);',
                [idUsuario],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        })
    },
}