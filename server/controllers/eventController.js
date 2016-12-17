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

  getEventsForUser: function(req, res, next) {
    //dbModels.EventsTable.findAll({order: [['when', 'DESC']]})
    dbModels.con.query('SELECT e.*, i.going, i.goingResponded, i.admin, i.invitePermission FROM invites i LEFT JOIN events e ON i.eventId = e.id WHERE i.userId = ' + req.params.userId, {model: dbModels.EventsTable})
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
      .then(function(event) {
        console.log('new event', event, req.body);
        return dbModels.InvitesTable
          .create({
            eventId: event.id,
            userId: req.body.userId,
            admin: true
          });
      }).then(function(invite) {
        console.log('invite', invite);
        res.redirect('/');
      })
      .catch(function(err) {
        console.log('Error: ', err);
      });
  },

  getPeople: function(req, res, next) {
    // dbModels.UsersTable.findAll({include: {model: [dbModels.UsersEventsTable], through: {attributes: ['eventId'], where: {eventId: req.params.eventId}}}})
    dbModels.con.query('SELECT u.*, i.going, i.goingResponded, i.admin, i.invitePermission FROM invites i LEFT JOIN users u ON i.userId = u.id WHERE i.eventId = ' + req.params.eventId, {model: dbModels.UsersTable})
      .then(function(event) {
        res.send(event);
      });
  },

  addPerson: function(req, res, next) {
    dbModels.InvitesTable.create({
      userId: req.body.userId,
      eventId: req.body.eventId
    }).then(function(data) {
      res.send(data);
    });
  }

};