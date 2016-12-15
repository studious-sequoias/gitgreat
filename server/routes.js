var eventController = require('./controllers/eventController.js');
var homeController = require('./controllers/homeController.js');
var itemListController = require('./controllers/itemListController.js');
var remindersController = require('./controllers/remindersController.js');
var photosController = require('./controllers/photosController.js');

module.exports = function (app, express) {
  app.get('/', homeController.homepage);
  app.get('/create', eventController.createEvent);

  app.post('/eventTable', eventController.eventsTablePost);
  app.get('/eventTable', eventController.eventsTableGet);

  app.get('/api/events', eventController.getEvents);
  app.post('/api/events', eventController.addEvent);
  app.get('/api/events/name/:eventName', eventController.getEventByName);
  app.get('/api/events/id/:eventId', eventController.getEventById);
  app.get('/api/events/id/:eventId/people', eventController.getPeople);
  app.post('/api/events/people', eventController.addPerson);


  app.post('/itemList', itemListController.itemsPost);
  app.get('/itemList', itemListController.itemsGet);

  app.post('/reminders', remindersController.remindersPost);
  app.get('/reminders', remindersController.remindersGet);

  app.post('/uploadImage', photosController.uploadImage);
  app.get('/displayImages', photosController.displayImages);

  app.get('*', function (req, res) {
    res.redirect('/');
  });
};
