const http = require('http');
const fs = require('fs');
const { fileURLToPath } = require('url');

http.createServer(onRequest).listen(8000);
console.log(`Server running at localhost:8000`);

function onRequest(request, response){

    let filePatch = __dirname
    response.writeHead(200, {'Content-type': 'text/html'});
   
    fs.readFile('../index.html', null, function(error, data){
        if(error){
            response.writeHEad(404);
            response.write('File index.html not found' );
        }else{
            response.write(data);
        }
        response.end();

    });

}

