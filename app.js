
var http = require('http');
var express = require('express');
var app = express();
var web_routes = require("./modules/web_routes");

app.set('views', 'views');
web_routes(app);
app.use(express.static('public'));

app.listen(5000, function () {
    console.log("jenkin test node is listening at >> 5000");
});
