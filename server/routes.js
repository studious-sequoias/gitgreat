var eventController = require('./controllers/eventController.js');
var homeController = require('./controllers/homeController.js');
var itemListController = require('./controllers/itemListController.js');
var remindersController = require('./controllers/remindersController.js');
var photosController = require('./controllers/photosController.js');

module.exports = function (app, express) {
  app.get('/', homeController.homepage);
  app.get('/create', eventController.createEvent);

  app.post('/eventTable', eventController.eventTablePost);
  app.get('/eventTable', eventController.eventTableGet);

  app.post('/itemList', itemListController.itemListPost);
  app.get('/itemList', itemListController.itemListGet);

  app.post('/reminders', remindersController.remindersPost);
  app.get('/reminders', remindersController.remindersGet);

  app.post('/uploadImage', photosController.uploadImage);
  app.get('/displayImages', photosController.displayImages);
};
