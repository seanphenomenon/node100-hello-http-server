// write your code here
const http = require('http');

const server = http.createServer (function(req , res){
  // log a message when request is received
  console.log('Received'+ req.method + 'request for:' + req.url);
  // send headers
  res.writeHead (200, {'Content-Type': 'text/plain'});

  // send body response
  res.end('Hello World');
});

// listen for incoming connections
server.listen (8080, 'localhost', null, function () {
// log a message that the server is listening and port

console.log ('Server is listening on localhost:8080')
});
