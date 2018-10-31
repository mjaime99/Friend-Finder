var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});