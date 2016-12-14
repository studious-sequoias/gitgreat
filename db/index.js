var Sequelize = require('sequelize');
var mysql = require('mysql');

mysql.createConnection({
  user: root,
  password: null,
  database: 'gitgreat'
});

var sequelize = new Sequelize('gitgreat', 'root', '', {
  host: 'localhost', dialect: 'mysql'
});

var EventTable = sequelize.define('events', {
  name: {
    type: Sequelize.STRING
  },
  where: {
    type: Sequelize.STRING
  },
  when: {
    type: Sequelize.DATE
  }
});

var ItemListTable = sequelize.define('itemlists', {
  item: {
    type: Sequelize.STRING
  },
  owner: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.STRING
  },
});

var ReminderTable = sequelize.define('reminders', {
  phoneNumber: {
    type: Sequelize.INTEGER
  },
  msg: {
    type: Sequelize.STRING
  },
  when: {
    type: Sequelize.DATE
  },
});

//Create associations such that ItemListTable and ReminderTable contain eventId
ItemListTable.belongsTo(EventTable);
ReminderTable.belongsTo(EventTable);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var PhotosTable = sequelize.define('photos', {
  url: {
    type: Sequelize.STRING
  }
});


module.exports.PhotosTable = PhotosTable;
module.exports.EventTable = EventTable;
module.exports.ItemListTable = ItemListTable;
module.exports.ReminderTable = ReminderTable;