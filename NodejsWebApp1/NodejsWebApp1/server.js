
var http = require('http');
var fs = require('fs');

const PORT = 7000;

fs.readFile('./enter.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});


//const express = require('express');
//const app = express();
//app.get('/', (req, res) => {
//    res.send('Hello World!');
//});
//const server = app.listen(7000, () => {
//    res.writeHead(200, {'Content-Type': 'text/html'})
//    fs.readFile('enter.html', function (error, data) {
//        if (error) {
//            res.writeHead(404)
//            res.write('Error: file not found')

//        } else {
//         res.write(data)
//        }
//    })
//    res.end()
//})
//});




//const http = require('http');
//const fs = require('fs');
//const port = 7000;

//const server = http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'})
//    fs.readFile('enter.html', function (error, data) {
//        if (error) {
//            res.writeHead(404)
//            res.write('Error: file not found')

//        } else {
//         res.write(data)
//        }
//    })
//    res.end()
//})
//const server = app.listen(7000, () => {
//    console.log(`Express running ? PORT ${server.address().port}`);
//});

