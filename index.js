const http = require('http');

const PORT = process.env.PORT || '5000';
const HOST = 'localhost';

//Request Handler
function requestHandler(req, res) {

}

//Create a server
const server = http.createServer(requestHandler);

//Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server is running and listening to requests at: http://${HOST}:${PORT}`);
});

