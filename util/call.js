var http = require('http');
 

/**********************************************  Rest Service Get   *********************************************************************/
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
 getCall =  function() {
    var result ;
	var optionsget = {
		host : 'localhost', // here only the domain name  http://localhost:8080/RestService/rest/message/getItems
		// (no http/http !)
		port : 8080,
		path : '/RestService/rest/message/getItems', // the rest of the url with parameters if needed
		method : 'GET' // do GET
	};
	 
	console.info('Options prepared:');
	console.info(optionsget);
	console.info('Do the GET call');
	 

	// do the GET request
	var reqGet = http.request(optionsget, function(res) {
		console.log("statusCode: ", res.statusCode);
		// uncomment it for header details
	//  console.log("headers: ", res.headers);
	 
	 
		res.on('data', function(d) {
			console.info('GET result:\n');
			console.log("********************* "+d);
			process.stdout.write(d);
			result = d;
			console.info('\n\nCall completed');
		});

		return result;
	 
	});
	 
	reqGet.end();
	reqGet.on('error', function(e) {
		console.error(e);
	});

	console.log("result: ", reqGet.result);
	return result;
}


/**********************************************  Rest Service Post   *********************************************************************/
/**
 * HOW TO Make an HTTP Call - POST
 */
// options for POST
function  postCall() {
	var optionsPost = {
		host : 'localhost', // here only the domain name  http://localhost:8080/RestService/rest/message/consumeMsgFromQueue
		// (no http/http !)
		port : 8080,
		path : '/RestService/rest/message/consumeMsgFromQueue', // the rest of the url with parameters if needed
		method : 'POST' //
	};
	 
	console.info('Options prepared:');
	console.info(optionsPost);
	console.info('Do the POST call');
	 

	// do the POST request
	var reqPOST = http.request(optionsPost, function(res) {
		console.log("statusCode: ", res.statusCode);
		// uncomment it for header details
	//  console.log("headers: ", res.headers);
	 
	 
		res.on('data', function(d) {
			console.info('POST result:\n');
			process.stdout.write(d);
			console.info('\n\nCall completed');
		});
	 
	});
	 
	reqPOST.end();
	reqPOST.on('error', function(e) {
		console.error(e);
	});
}

//getCall();
//postCall();


module.exports.getCall  =  getCall;
module.exports.postCall =  postCall;

