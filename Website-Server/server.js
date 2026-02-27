function createHtmlServer(port, protocol)
{
    protocol.createServer((request, response) => {
        response.writeHead(200, {
            'Content-Type':'text/html'
        })
        response.write(`<html><body><h1>Das ist HTML</h1><p>Und das ein Absatz!</p></body></html>`);
        response.end(); 
    }).listen(port);
}





module.exports = {
    createHtmlServer
};


const http = require('http');

createHtmlServer(8222, http);