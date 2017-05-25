var express = require('express');
var path = require('path');
var bp = require('body-parser');
var app = express();
var port = 8000;


app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + '/client')));
app.set('views',path.join(__dirname + '/client/views'));
app.set('view engine','ejs');

require('./server/config/routes')(app)

app.listen(port,(req,res)=>{
    console.log(`server running on ${port}`);
});
