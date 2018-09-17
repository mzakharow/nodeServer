// var user = require('./user.js');
//
// let vasya = new user.User("Вася");
// let petya = new user.User("Петя");
//
// vasya.hello(petya)

let http = require('http');

let server = new http.Server();

server.listen(1337, '127.0.0.1');

let counter = 0;

let emit = server.emit;

server.emit = function(event /*  */) {
    console.log(event);
    emit.apply(server, arguments);
}

server.on('request', function (reg, res) {
    res.end("Hello world" + ++counter);
});
