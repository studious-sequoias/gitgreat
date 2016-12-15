var Sequelize = require('sequelize');
var mysql = require('mysql');
require('dotenv').config();

mysql.createConnection({
  user: root,
  password: null,
  database: 'gitgreat'
});

//Environment variables
if (process.env.SQL_DB) {
  var dbName = process.env.SQL_DB;
} else {
  console.log('WARNING: environment variable SQL_DB not defined.  Defaulting to "gitgreat"');
  var dbName = 'gitgreat';
}
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
  var pass = '';
}

var sequelize = new Sequelize(dbName, user, pass, {
  host: 'localhost', dialect: 'mysql'
});

var EventsTable = sequelize.define('events', {
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

var ItemsTable = sequelize.define('items', {
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

var RemindersTable = sequelize.define('reminders', {
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

var PhotosTable = sequelize.define('photos', {
  url: {
    type: Sequelize.STRING
  }
});

// *************** newly added *****************:
var UsersTable = sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },
  e_mail: {
    type: Sequelize.STRING
  },
  userName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

var MessagesTable = sequelize.define('messages', {
  message: {
    type: Sequelize.STRING
  }
});

var UsersEventsTable = sequelize.define('users_events', {
  
});

//Create associations such that ItemListTable and ReminderTable contain eventId
ItemsTable.belongsTo(EventsTable);
RemindersTable.belongsTo(EventsTable);

// *************** newly added *****************:
PhotosTable.belongsTo(EventsTable);
MessagesTable.belongsTo(EventsTable);
MessagesTable.belongsTo(UsersTable);
UsersEventsTable.belongsTo(EventsTable);
UsersEventsTable.belongsTo(UsersTable);


sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });



module.exports.PhotosTable = PhotosTable;
module.exports.EventsTable = EventsTable;
module.exports.ItemsTable = ItemsTable;
module.exports.RemindersTable = RemindersTable;

// *************** newly added *****************:
module.exports.UsersTable = UsersTable;
module.exports.MessagesTable = MessagesTable;
module.exports.UsersEventsTable = UsersEventsTable;





