/**
 * Created by Hew4803 on 5/24/17.
 */
var http = require('http');


http.get(process.argv[2],(res)=>{
    res.setEncoding('utf8');
    res.on("data",(data)=>{
        console.log(data)
    })
});
