const dbModels = require('../../db/index.js');
const utils = require('../utils.js');

module.exports = {

  createEvent: function(req, res, next) {
    res.redirect('/createEvent.html');
  },

  eventTablePost: function(req, res, next) {
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
  },

  eventTableGet: function(req, res, next) {
    dbModels.EventTable.findAll({order: [['when', 'DESC']]})
      .then(function(events) {
        utils.sendResponse(res, 200, 'application/json', events);
      });
  }

};