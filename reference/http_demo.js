const http = require('node:http');

/*Source Code: lib/http.js
To use the HTTP server and client one must require('node:http').
The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. 
In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, 
so the user is able to stream data. */


// Create server object
http.createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server running now...'));


