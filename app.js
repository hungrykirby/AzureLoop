const http = require('http');
const path = require('path')
const express = require('express');
const socketio = require('socket.io');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
var server = http.Server(app);
server.listen(process.env.PORT || 8080);

var io = socketio(server);
let sum = 0;
io.sockets.on('connection', function(socket) {
  socket.on('btn', function(pushed) {
    if(pushed){
      for(var i = 0; i < 10; i++){
        console.log('この数は:' + i + 'であるのだ');
        console.log('Are you Ok?');
        console.log('Lets start!');
        console.log('----------------------------------------');
        sum += i;
        if(i === 9) console.log(sum);
      }
    }
  });
});
