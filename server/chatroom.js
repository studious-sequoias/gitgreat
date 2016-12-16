var messages = [];
var dbModels = require('../db/index.js');




module.exports = function(io) {
  return function(socket) {

    console.log('a user connected');

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });

    socket.on('msgreq:msg', function(msg) {
      messages.push(msg);
      dbModels.MessagesTable.create({
        message: msg
      })
      .then(function() {
        console.log('MSG RECEIVED: ' + msg);
        io.emit('msgres:msg', msg);
      })
      .catch(function(err) {
        io.emit('msgres:msg', err);
      });
    });

    socket.on('msgreq:all', function() {
      dbModels.MessagesTable.find({})
      .then(function(resp) {
        io.emit('msgres:all', resp);
      });
    });
  };
};


// var messages = [];
// io.on('connection', function(socket) {

//   console.log('a user connected');

//   socket.on('disconnect', function() {
//     console.log('user disconnected');
//   });

//   socket.on('msgreq:msg', function(msg) {
//     messages.push(msg);
//     console.log('message RECEIVED: ' + msg);
//     io.emit('msgres:msg', msg);
//   });

//   socket.on('msgreq:all', function() {
//     io.emit('msgres:all', messages);
//   });

// });
