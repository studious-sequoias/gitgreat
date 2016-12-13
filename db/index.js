var Sequelize = require('sequelize');
var mysql = require('mysql');
require('dotenv').config();

mysql.createConnection({
  user: root,
  password: null,
  database: 'gitgreat'
});

//Environment variables
if (process.env.SQL_USER) {
  var user = process.env.SQL_USER;
} else {
  console.log('WARNING: environment variable SQL_USER not defined.  Defaulting to "root"');
  var user = 'root';
}
if (process.env.SQL_PASS) {
  var pass = process.env.SQL_PASS;
} else {
  console.log('WARNING: environment variable SQL_PASS not defined.  Defaulting to ""');
  var user = '';
}

var sequelize = new Sequelize('gitgreat', user, pass, {
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