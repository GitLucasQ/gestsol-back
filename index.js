const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

// ROUTES
const userRoutes = require('./routes/userRoutes')


app.use(userRoutes)

app.listen(5050, () => {
    console.log("Servidor corriendo en el puerto 5050")
})
