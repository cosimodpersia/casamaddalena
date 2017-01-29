var express = require('express');
var app = express();


/** Bind to the Node.js app a port variable that has to be used subsequently
 *	We firstly check if the environmental variable PORT has previously been set.
 * 	If it is not the case we set the port value to 8081
 */
app.set('port', (process.env.PORT || 8081));

/** Set the port at which the Node.js app will listen
 */
app.listen(app.get("port"), function () {
    console.log("Server running at port " + this.address().port);
});

/** Handle static files in the current directory.*
This has to be done in order to retrieve all files like images, stylesheets and scripts*/

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
