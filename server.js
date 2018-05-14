var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//http server, node to start server and listent as app
var http =require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname+'/public'));

io.on('Connection', function(){
    console.log('User Connected via socket.io!!!');
});


http.listen(PORT, function(){
    console.log('Server started!!!')
});