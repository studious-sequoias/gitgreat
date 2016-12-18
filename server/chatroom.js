var dbModels = require('../db/index.js');

module.exports = function(io) {
  return function(socket) {

    console.log('a user connected');

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });

    //Store new message
    socket.on('msgreq:msg', function(msg) {
      dbModels.MessagesTable.create({
        message: msg.message,
        eventId: msg.eventId,
        userId: msg.userId
      })
      .then(function() {
        io.emit('msgres:msg', msg);
      })
      .catch(function(err) {
        io.emit('msgres:msg', err);
      });
    });

    // Get all chat messages
    socket.on('msgreq:all', function(eventId) {
      dbModels.MessagesTable.findAll({
        where: {
          eventId: eventId || null
        }
      })
      .then(function(resp) {
        var msg = resp.reduce(function(arr, item) {
          arr.push({
            username: item.userId,
            message: item.message
          });
          return arr;
        }, []);

        var nameIds = msg.map(function(item) {
          return item.username;
        });

        dbModels.UsersTable.findAll({
          where: {
            id: nameIds
          }
        })
        .then(function(resp) {
          var nameHash = resp.reduce(function(obj, item) {
            obj[item.id] = item.name;
            return obj;
          }, {});

          var result = msg.reduce(function(arr, item) {
            arr.push({
              username: nameHash[item.username],
              message: item.message
            });
            return arr;
          }, []);

          io.emit('msgres:all', result);
        });
      });
    });
  };
};
