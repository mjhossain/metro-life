var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var bodyParser = require ('body-parser');
var fs = require('fs');
var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '91a371c98bd07ad884c3e400c9e23a68', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});
// var requirejs = require('requirejs');
var port = 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
//This function pulls the data from MTA and converts it to JSON
function getMTAData(line){

  mta.status('subway').then(function (result) {

  	result = JSON.stringify(result).replace(/\\n|\\r/g, '');

  	var regex = /(<([^>]+)>)/ig; //Regex for removing all html tags
  	var reg = new RegExp("[ ]+","g"); // Resgex for removing whitespaces
    result = result.replace(reg," ");

  	result = result.replace(regex, ""); //Calling 1st regex

    var j = JSON.parse(result); //Data in json format

  var h =  getDataForLine(line, j); //Get the data for the line
//  console.log(h);
  return h;

   }).catch(function (err) {
       console.log(err);
   });
}

function getDataForLine(line, data){

  let selected_train = data[line] //array position
  //var i = selected_train["name"] + "\n" + selected_train["status"]; //Data for array position

  return {"test": 1};
  //console.log(i);
}*/


//This is the function that ajax calls
app.get("/getStatus", function(req, res){

  var line = req.param('line');

  mta.status('subway').then(function (result) {

  	result = JSON.stringify(result).replace(/\\n|\\r/g, '');

  	var regex = /(<([^>]+)>)/ig; //Regex for removing all html tags
  	var reg = new RegExp("[ ]+","g"); // Resgex for removing whitespaces
    result = result.replace(reg," ");

  	result = result.replace(regex, ""); //Calling 1st regex

    var j = JSON.parse(result); //Data in json format

  /*var h =  getDataForLine(line, j); //Get the data for the line
  console.log(h);*/

  let selected_train = j[line];

  console.log(selected_train);
  res.send(selected_train);

   }).catch(function (err) {
       console.log(err);
   });


   //console.log(line);
//  getMTAData(line);
  //console.log("From here: " + i);
})

app.get('/',function(req,res){

    res.render('index');
})


app.listen(port,function(){

   //console.log('hello');
})
