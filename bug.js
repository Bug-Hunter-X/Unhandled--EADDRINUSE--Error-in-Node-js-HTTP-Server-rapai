const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); //Port already in use error if the port is already occupied by another process
console.log('Server is running at http://localhost:8080');