const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json())

// ROUTES
const userRoutes = require('./routes/userRoutes')
const ticketRoutes = require('./routes/ticketRoutes')


app.use(userRoutes)
app.use(ticketRoutes)

app.listen(5050, () => console.log("Server online on port 5050"))
