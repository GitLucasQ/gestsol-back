const connection = require('../conecction/connection')

module.exports = {
    listTickets() {
        return new Promise((resolve, reject) => {
            connection.query('select * from solicitud;',
                [],
                (err, result) => {
                    if (err) reject(err), console.log(err)
                    else resolve(result)
                });
        });
    }
}