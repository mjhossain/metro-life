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

mta.status('subway').then(function (result) {
	// result = JSON.stringify(result);
	result = JSON.stringify(result).replace(/\\n|\\r/g, '');


	var regex = /(<([^>]+)>)/ig; //Regex for removing all html tags
	var reg = new RegExp("[ ]+","g"); // Resgex for removing whitespaces
    result = result.replace(reg," ");
    //
	result = result.replace(regex, ""); //Calling 1st regex
    //
   // console.log(result);
   var j = JSON.parse(result);

   //console.log(showDataOf(0, j))

    // showDataFor('7', j);
    //
     // fs.writeFile("data.json", result, function(err) {
     //     if (err) {
     //         console.log(err);
     //     }
     // })
 }).catch(function (err) {
     console.log(err);
 });


//  require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     var $ = require("jquery")(window);
// });
 function showDataOf(train, data){
    let selected_train = data[train]
    return selected_train.name + "\n" + selected_train.status;
 }

function showDataFor(line, data){

    for(var i = 0; i < data.length; i++){

        var lineRow = data[i];
        console.log(data[i].name);
      }
}

app.get("/testFunction", function(res, req){
  console.log("Connected");
})

 app.get('/',function(req,res){

     res.render('index');
 })


app.listen(port,function(){

    //console.log('hello');
})
