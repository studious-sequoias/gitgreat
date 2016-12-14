const express = require('express');
const parser = require('body-parser');
const cloudinary = require('cloudinary');

// Wells's cloudinary api key, replace with your own as this key will be deleted soon
cloudinary.config({
  cloud_name: 'dhdysf6qc',
  api_key: '299727653385491',
  api_secret: 'vshmxkEjzRiylUjrXi20qk67hKA'
});

const app = express();
app.use(parser.json());

//serve public folder static files
app.use(express.static(__dirname + '/../public'));
//serve node_modules via the '/script' virtual file path
app.use('/scripts', express.static(__dirname + '/../node_modules'));

// connecting to the routing page
require('./routes.js')(app, express);

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

module.exports = app;