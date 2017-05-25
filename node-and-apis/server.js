
var http = require('http');
var fs = require('fs');


var server = http.createServer((request,response)=>
{
    function writePage(page){
        fs.readFile(page, 'utf8',(err, data) => {
            if(err){throw err}
            else{
                response.end(data)}
        });
    }
    console.log('request url: '+request.url);
    switch (request.url){
        case '/':
            writePage('index.html');
            break;
        case '/ninjas':
            writePage('ninjas.html');
            break;
        case '/dojos/new':
            writePage('dojos.html');
            break;
        default:
            writePage('error.html')
    }
});

server.listen(8000);

