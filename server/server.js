const express = require('express');
const parser = require('body-parser');
const url = require('url');

const db = require('../db');
const dbModels = require('../db/index.js');
const utils = require('./utils.js');

const cloudinary = require('cloudinary');
const multiparty = require('multiparty');

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

app.get('/', function(req, res, next) {
  res.redirect('/homepage.html');
});
app.get('/create', function(req, res, next) {
  res.redirect('/createEvent.html');
});

app.post('/eventTable', function(req, res, next) {
  dbModels.EventTable
    .create({
      name: req.body.name,
      where: req.body.where,
      when: req.body.when
    })
    .then(function(event) {
      res.redirect('/');
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
});

app.get('/eventTable', function(req, res, next) {
  dbModels.EventTable.findAll({order: [['when', 'DESC']]})
  .then(function(events) {
    utils.sendResponse(res, 200, 'application/json', events);
  });
});

app.post('/itemList', function(req, res, next) {
  var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
  dbModels.EventTable.findOne({where: {name: eventName}})
    .then(function(event) {
      var eventId = event.id;
      dbModels.ItemListTable
      .create({
        item: req.body.item,
        owner: req.body.owner,
        cost: req.body.cost,
        eventId: eventId
      })
      .then(function(item) {
        utils.sendResponse(res, 201, 'text/html', 'item successfully posted');
      }).catch(function(err) {
        console.log('Error: ', err);
      });
    });
});

app.get('/itemList', function(req, res, next) {
  var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
  dbModels.EventTable.findOne({where: {name: eventName}})
    .then(function(event) {
      var eventId = event.id;
      dbModels.ItemListTable.findAll({where: {eventId: eventId}})
        .then(function(items) {
          utils.sendResponse(res, 200, 'application/json', items);
        });
    });
});

app.post('/reminders', function(req, res, next) {
  var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
  dbModels.EventTable.findOne({where: {name: eventName}})
    .then(function(event) {
      var eventId = event.id;
      dbModels.ReminderTable
      .create({
        phoneNumber: req.body.phoneNumber,
        msg: req.body.msg,
        when: req.body.when,
        eventId: eventId
      })
      .then(function(item) {
        utils.sendResponse(res, 201, 'text/html', 'reminder successfully posted');
      }).catch(function(err) {
        console.log('Error: ', err);
      });
    });
});

app.get('/reminders', function(req, res, next) {
  var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
  dbModels.EventTable.findOne({where: {name: eventName}})
    .then(function(event) {
      var eventId = event.id;
      dbModels.ReminderTable.findAll({where: {eventId: eventId}})
        .then(function(reminders) {
          utils.sendResponse(res, 200, 'application/json', reminders);
        });
    });
});


app.post('/uploadImage', function(req, res) {
 console.log('hits uploadImage in server');
 var form = new multiparty.Form();
 form.parse(req, function(err, fields, files) {
   console.log('fields: ', fields);
   console.log('files: ', files);
   console.log('file:', files.imageFile[0].path);

   cloudinary.uploader.upload(files.imageFile[0].path, function(result) {
     console.log('cloudinary resulttt: ', result);
     dbModels.PhotosTable.create({url: result.url})
       .then(function(event) {
         console.log('successfully added url to db!!!');
       })
       .catch(function(err) {
         console.log('photosTable db entry error: ', err);
       });
   });

 });
 res.send();
});

app.get('/displayImages', function(req, res) {
 console.log('hits displayimages in server');
 dbModels.PhotosTable.findAll()
 .then(function(data) {
   for(var pair in data.entries()) {
     console.log(pair);
   }
   res.send(data);
 });
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

module.exports = app;