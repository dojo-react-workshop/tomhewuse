
const fs = require('fs');
const path = require('path');
const http = require('http');


let location = process.argv[3];
let server = http.createServer(function(req,res){
    fs.readFile(location,'utf8', (err,contents)=>{

    })
});

