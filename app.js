let express = require('express');
let app = express();

require("./express")(app);

app.listen("4000", function () {
	console.log("Express server listening on port 4000");
});
