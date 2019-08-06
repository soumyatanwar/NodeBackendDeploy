var socket = io()

function play(instId){
    socket.emit('play', {id:instId})
}

$(function(){
    var usernameBox = $('#username')
    var loginBtn = $('#login')
    var sendBtn = $('#send')
    var msgBox = $('#message')
    var chats = $('#chats')

    socket.on('play', function(data){
        var instrument = $('#a'+data.id)[0]
        instrument.play()
        })
    })