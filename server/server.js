const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

//Listener
emitter.on('messageLogged',  () => {
    console.log('Listener called');
});


emitter.emit('messageLogged');

const PORT = 3000;


const server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('../map.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
})

server.listen(PORT, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + PORT);
    }
})