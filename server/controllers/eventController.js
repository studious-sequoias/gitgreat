const dbModels = require('../../db/index.js');
const utils = require('../utils.js');

module.exports = {

  createEvent: function(req, res, next) {
    res.redirect('/createEvent.html');
  },

  eventsTablePost: function(req, res, next) {
    dbModels.EventsTable
      .create({
        name: req.body.name,
        where: req.body.where,
        when: req.body.when
      })
      .then(function(events) {
        res.redirect('/');
      })
      .catch(function(err) {
        console.log('Error: ', err);
      });
  },

  eventsTableGet: function(req, res, next) {
    dbModels.EventsTable.findAll({order: [['when', 'DESC']]})
      .then(function(events) {
        utils.sendResponse(res, 200, 'application/json', events);
      });
  },

  getEvents: function(req, res, next) {
    dbModels.EventsTable.findAll({order: [['when', 'DESC']]})
      .then(function(events) {
        utils.sendResponse(res, 200, 'application/json', events);
      });
  },

  getEventByName: function(req, res, next) {
    dbModels.EventsTable.findOne({where: {name: req.params.eventName}})
      .then(function(event) {
        utils.sendResponse(res, 200, 'application/json', event);
      });
  },

  getEventById: function(req, res, next) {
    dbModels.EventsTable.findOne({where: {id: req.params.eventId}})
      .then(function(event) {
        utils.sendResponse(res, 200, 'application/json', event);
      });
  },

  addEvent: function(req, res, next) {
    dbModels.EventsTable
      .create({
        name: req.body.name,
        where: req.body.where,
        when: req.body.when
      })
      .then(function(events) {
        res.redirect('/');
      })
      .catch(function(err) {
        console.log('Error: ', err);
      });
  },

  getPeople: function(req, res, next) {
    // dbModels.UsersTable.findAll({include: {model: [dbModels.UsersEventsTable], through: {attributes: ['eventId'], where: {eventId: req.params.eventId}}}})
    dbModels.con.query('SELECT u.* FROM users_events ue LEFT JOIN users u ON ue.userId = u.id WHERE ue.eventId = ' + req.params.eventId, {model: dbModels.UsersTable})
      .then(function(event) {
        res.send(event);
      });
  },

  addPerson: function(req, res, next) {
    dbModels.UsersEventsTable.create({
      userId: req.body.userId,
      eventId: req.body.eventId
    }).then(function(data) {
      res.send(data);
    });
  }

};