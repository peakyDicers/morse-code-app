const express = require('express');
const http = require('http');
const path = require('path');
const io = require('socket.io')(http);

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
 });

io.on('connection', function(socket){
  console.log('a user is connected');
})
const server = http.createServer(app);

server.listen(3000, function(){
  console.log('listening on *:3000');
});