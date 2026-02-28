const http = require('http');
const fs = require('fs');
const path = require('path');

const MIMETypes =  require('./.offlinepm-local/MIME-Types/MIME-Types');

startHttpServer('127.0.0.1', 8990);




//Basic Web Server:


//Start webserver on a port with http and say if localhost or 0.0.0.0

function startHttpServer(host, port)
{
    http.createServer(receiveRequest).listen(port, host);

    console.log("Http-Server started on http://" + host + ":" + port + "/");
}

//Be able to receive requests from frontend
function receiveRequest(request, response)
{
    if(request.url !== "/")
    {
        sendResponse(request.url, response);
    } else
    {
        sendResponse('index.html', response);
    }
}

//Be able to send to the frontend a response (200 found or 404 not found) with the requested content
function sendResponse(filePathAndName, response)
{
    response.writeHead(200, {'Content-Type':MimeTypeDecider(filePathAndName)});
    try {
        response.write(fs.readFileSync(filePathAndName));
    } catch (error) {
        console.warn("A requested file was not found!");
    }
    response.end();
}


function MimeTypeDecider(filePathAndName)
{
    let fileExtension = path.extname(filePathAndName).slice(1);

    console.log(fileExtension);

    return MIMETypes.MIME_TYPES[fileExtension];
}



function sendMainHtmlFile(fileName, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(fs.readFileSync(fileName));
    response.end();
}