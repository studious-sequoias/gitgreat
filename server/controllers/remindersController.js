const dbModels = require('../../db/index.js');
const utils = require('../utils.js');
const url = require('url');

module.exports = {

  remindersPost: function(req, res, next) {
    var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
    dbModels.EventsTable.findOne({where: {id: eventName}})
      .then(function(event) {
        var eventId = event.id;
        dbModels.RemindersTable
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
  },

  remindersGet: function(req, res, next) {
    var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
    dbModels.EventsTable.findOne({where: {id: eventName}})
      .then(function(event) {
        var eventId = event.id;
        dbModels.RemindersTable.findAll({where: {eventId: eventId}})
          .then(function(reminders) {
            utils.sendResponse(res, 200, 'application/json', reminders);
          });
      });
  }

};