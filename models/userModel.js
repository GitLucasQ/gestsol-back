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
}