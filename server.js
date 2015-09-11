
var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client')));

require('./config/mongoose.js');
require('./config/routes.js')(app);


app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});
