'use strict'

const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const port = 8000;

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(express.static(path.join(__dirname, './client')));

app.set('views', path.join(__dirname, './client/view'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(port, function(){
	console.log(`Server is listening on port ${port}`);
})