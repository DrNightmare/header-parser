var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var ip = req.connection.remoteAddress;
	var lang = req.headers["accept-language"].split(',')[0];
	var software = req.headers["user-agent"].split(')')[0].split('(')[1]; 
	res.send({"ipaddress":ip, "language":lang, "software": software});
});

app.listen(3000, function(err, data){
	if (err) console.log(err);
	console.log("Listening on port 3000");
});