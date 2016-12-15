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
  }

};