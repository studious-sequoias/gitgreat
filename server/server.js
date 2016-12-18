const express = require('express');
const parser = require('body-parser');
require('dotenv').config();

const cloudinary = require('cloudinary');

// Wells's cloudinary api key, replace with your own as this key will be deleted soon
cloudinary.config({
  'cloud_name': process.env.CLOUD_NAME,
  'api_key': process.env.CLOUD_KEY,
  'api_secret': process.env.CLOUD_SECRET
});

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

var http = require('http').Server(app);
var io = require('socket.io')(http);

//serve public folder static files
app.use(express.static(__dirname + '/../client/public'));
//serve node_modules via the '/script' virtual file path
app.use('/scripts', express.static(__dirname + '/../node_modules'));

// connecting to the routing page
require('./routes.js')(app, express);

var port = process.env.PORT || 3000;
if (process.env.PORT) {
  var port = process.env.PORT;
} else {
  console.log('WARNING: environment variable PORT not defined.  Defaulting to 3000');
  var port = 3000;
}
app.listen(port, function() {
  console.log('Server is listening on port', port);
});

http.listen(4000, function() {
  console.log('Server is listening on port', 4000);
});

io.on('connection', require('./chatroom.js')(io)); // chatroom

module.exports = app;