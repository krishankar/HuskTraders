const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require('path');
	var router = express.Router();

var port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));


var account=require('./routes/account');
// var upload=require('./routes/upload');

app.all('*', function(req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
	if ('OPTIONS' == req.method) return res.send(200);
	next();
});

app.use("/api/account",account);
// app.use("/api/upload",upload);

if (process.env.NODE_ENV == 'production') {
	console.log('production build' + path.join(__dirname, 'build/index.html'));
	app.use(express.static(path.join(__dirname, '/build')));
	app.get('*', function(req, res, next) {
		res.sendFile(path.join(__dirname+'/build/index.html'));
	});
}



// Keep Listening
app.listen(port, function() {
	console.log('Server started at port ' + port);
});
