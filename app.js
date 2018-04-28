var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var bodyParser = require ('body-parser');

var port = 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get(function(req,res)){
//     res.render
// }

app.listen(port,function() {
    console.log('We live!');
})
