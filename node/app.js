// var fs = require('fs');
// var Mta = require('mta-gtfs');
// var mta = new Mta({
//   key: '91a371c98bd07ad884c3e400c9e23a68', // only needed for mta.schedule() method
//   feed_id: 1                  // optional, default = 1
// });
//
// mta.status('subway').then(function (result) {
// 	// result = JSON.stringify(result);
// 	result = JSON.stringify(result).replace(/\\n|\\r/g, '');
//
//
//
// 	var regex = /(<([^>]+)>)/ig; //Regex for removing all html tags
// 	var reg = new RegExp("[ ]+","g"); // Resgex for removing whitespaces
//         result = result.replace(reg," ");
//
// 	 result = result.replace(regex, ""); //Calling 1st regex
//
//
//   fs.writeFile("data.json", result, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });;
// }).catch(function (err) {
//   console.log(err);
// });
