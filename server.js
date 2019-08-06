const express = require('express')
const path = require('path')

const app = express()

// For security reasons, heroku does not allow you to set the port, trying to use 3333 would have led
// to a communication timeout error, so we need to allow the PORT specified in the env of the OS of 
// the machine that Heroku will use to host the application
const SERVER_PORT = process.env.PORT || 3333

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send("Hello from the BackEnd"))

app.listen(SERVER_PORT, () => console.log("Server started"))