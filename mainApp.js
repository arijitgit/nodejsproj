var express = require('express');
var http = require("http");
var https = require("https");

var app = express();
var fs = require("fs");
var mysql = require('mysql');
var call = require('./util/call');  

var mainUtil = require('./util/mainUtil');
//mainUtil.isGreaterThanTen(12);


//call.getCall();
//call.postCall();
//================================ http://127.0.0.1:8088/verifyNumber?x=123 ====================================

app.get('/verifyNumber' ,function(req,res) {
		console.log(" x  --> "+req.query.x);
		var paramX = req.query.x;
		var result = mainUtil.isGreaterThanTen(paramX);
		console.log('Result  ==> '+result);
		res.send('Result  -> '+result);
})


app.get('/getItems' ,function(req,res) {
		console.log("getItems called ");
		var data = call.getCall();
		res.send('Result  -> '+data);
})


/*
Rest service to fetch DB result  
http://127.0.0.1:8088/verifyNumber?x=123
*/
app.get('/fetchRes' ,function(req,res) {

	console.log('Fetching Result from DB ');
	var result = [];
	var connection = mysql.createConnection('mysql://arijituser:arijitpwd@arijitdb.ckp5oecoso0o.us-west-2.rds.amazonaws.com:3306/testdb');

	connection.connect();

	var queryString = 'select * from test1';

	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		for (var i in rows) {
			console.log('Id : ', rows[i].id);
			console.log('Name : ', rows[i].name);
			result.push({id: rows[i].id, name: rows[i].name});
		}
		connection.end();
		res.contentType('application/json');
		res.send(JSON.stringify(result));
	});

})



//======================   Add Users    ==================================//
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
	 console.log(" <<---- ################# ------  >>")
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
	   console.log(" <<----   ------  >>")
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//============================List Users =======================================//

/* http://127.0.0.1:8088/listUsers */

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


//================================  Get Users  ====================================//

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id]
       console.log( user );
       res.end( JSON.stringify(user));
   });
})



app.get('/postMsgToQueue', function (req, res) {
	var request = require('request');
   request('http://localhost:8080/RestService/rest/message/postMsgToQueue', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
		console.log('Message ' + JSON.stringify(body));
     }
    })
})

app.get('/consumeMsgFromQueue', function (req, res) {
	var request = require('request');
   request('http://localhost:8080/RestService/rest/message/consumeMsgFromQueue', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
		console.log('Message ' + JSON.stringify(body));
     }
    })
})


//=======================================================================================================//
var server = app.listen(8088,"127.0.0.2", function () {

  var host = server.address().address
  var port = server.address().port


  let abcd = "   This is let";
  console.log("Example app listening at http://%s:%s", host, port)
  //console.log("ABCD a "+abcd);

})
