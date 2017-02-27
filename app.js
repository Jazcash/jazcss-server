let express = require('express');
let app = express();
var expressWs = require('express-ws')(app);

require("./express")(app);

app.ws('/', function(ws, req) {
	ws.on('message', function(msg) {
		console.log(msg);
	});
	console.log('socket', req.testing);
});

app.listen("3001", function () {
	console.log("Express server listening on port 3001");
});
