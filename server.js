var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//http server, node to start server and listent as app
var http =require('http').Server(app);

app.use(express.static(__dirname+'/public'));
http.listen(PORT, function(){
    console.log('Server started!!!')
});