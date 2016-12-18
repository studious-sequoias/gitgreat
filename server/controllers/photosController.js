const dbModels = require('../../db/index.js');
const cloudinary = require('cloudinary');
const multiparty = require('multiparty');

module.exports = {

  uploadImage: function(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      var eventId = parseInt(fields.eventId[0]);
      if (files.imageFile) {
        cloudinary.uploader.upload(files.imageFile[0].path, function(result) {
          console.log('cloudinary resulttt: ', result);
          dbModels.PhotosTable.create({
            url: result.url,
            eventId: eventId
          })
            .then(function(event) {
              console.log('successfully added url to db!!!');
            })
            .catch(function(err) {
              console.log('photosTable db entry error: ', err);
            });
        });
      }
    });
    res.send();
  },

  displayImages: function(req, res) {
    var eventId = req.url.split('').reverse().join('');
    eventId = parseInt(eventId.slice(0, eventId.indexOf('=')).split('').reverse().join(''));

    dbModels.PhotosTable.findAll({
      where: {
        eventId: eventId
      }
    })
    .then(function(data) {
      res.send(data.reverse());
    });
  }

};