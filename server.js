const express = require('express')
const http = require('http')
const socketio = require('socket.io')

// The Express App
const app = express()
// The server on which the app runs
const server = http.Server(app)
// The socket.io server
const io = socketio(server)

// For security reasons, heroku does not allow you to set the port, trying to use 3333 would have led
// to a communication timeout error, so we need to allow the PORT specified in the env of the OS of 
// the machine that Heroku will use to host the application
const PORT = process.env.PORT || 2323

io.on('connection', function(socket){
    console.log('Socket created: '+ socket.id)
    socket.on('msg', function(data){
        socket.broadcast.emit('msg', {
            sender: users[socket.id],
            message: data.message
        })
    })
    socket.on('login', function(data){
        users[socket.id] = data.username
        socket.emit('logged_in')
    })
    socket.on('play', function(data){
        io.emit('play',data)
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(PORT, () =>{
    console.log('Server started at http://localhost:${PORT}')
})