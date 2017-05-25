/**
 * Created by Hew4803 on 5/24/17.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
var port = process.argv[2];


let server = http.createServer(function(req,res) {

    let urlObject = url.parse(req.url, true);
    let jsonObject = {
        hour: new Date(urlObject.query.iso).getHours(),
        minute: new Date(urlObject.query.iso).getMinutes(),
        second: new Date(urlObject.query.iso).getSeconds(),
    };
    console.log(jsonObject);
    res.setHeader('Content-Type', 'application/json');
    if (urlObject.pathname === '/api/parsetime') {
        res.end(JSON.stringify(jsonObject));
    }
    if (urlObject.pathname === '/api/unixtime') {
        let unixTime={unixtime: new Date(urlObject.query.iso).getTime()}
        res.end(JSON.stringify(unixTime));
    }
});

server.listen(port);
