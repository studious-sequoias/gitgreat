const dbModels = require('../../db/index.js');
const utils = require('../utils.js');
const url = require('url');

module.exports = {

  itemsPost: function(req, res, next) {
    var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
    dbModels.EventTable.findOne({where: {name: eventName}})
      .then(function(event) {
        var eventId = event.id;
        dbModels.itemsTable
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
  },

  itemsGet: function(req, res, next) {
    var eventName = url.parse(req.url).query.slice(10).split('_').join(' ');
    dbModels.EventTable.findOne({where: {name: eventName}})
      .then(function(event) {
        var eventId = event.id;
        dbModels.itemsTable.findAll({where: {eventId: eventId}})
          .then(function(items) {
            utils.sendResponse(res, 200, 'application/json', items);
          });
      });
  }
};