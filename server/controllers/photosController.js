const dbModels = require('../../db/index.js');
const cloudinary = require('cloudinary');
const multiparty = require('multiparty');

module.exports = {

  uploadImage: function(req, res) {
    console.log('hits uploadImage in server');
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      // console.log('fields: ', fields);
      // console.log('files: ', files);
      // console.log('file:', files.imageFile[0].path);
      if (files.imageFile) {
        cloudinary.uploader.upload(files.imageFile[0].path, function(result) {
          console.log('cloudinary resulttt: ', result);
          dbModels.PhotosTable.create({url: result.url})
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
    console.log('hits displayimages in server');
    dbModels.PhotosTable.findAll()
    .then(function(data) {
      for (var pair in data.entries()) {
        console.log(pair);
      }
      res.send(data);
    });
  }

};