const http = require('http');

const PORT = process.env.PORT || '5000';
const HOST = 'localhost';

//Request Handler
function requestHandler(req, res) {
    //Users
    if (req.url === '/users/create' && req.method === 'POST') {

    } else if (req.url === '/users/authenticate' && req.method === 'POST') {

    } else if (req.url === 'users/getall' && req.method === 'GET') {

    }

    //Books
    if (req.url === 'books/create' && req.method === 'POST') {

    } else if (req.url === 'books/delete' && req.method === 'DELETE') {

    } else if (req.url === 'books/loanout' && req.method === 'POST') {

    } else if (req.url === 'books/return' && req.method === 'POST') {

    } else if (req.url === 'books/update' && req.method === 'PUT') {
        
    }
}

//Create a server
const server = http.createServer(requestHandler);

//Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server is running and listening to requests at: http://${HOST}:${PORT}`);
});

