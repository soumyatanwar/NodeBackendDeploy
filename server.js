const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send("Hello from the BackEnd"))

app.listen(3333, () => console.log("Server started"))