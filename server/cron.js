//This cronjob runs periodically to grab the next reminder from the db. 
//The reminder returned from the db query wil have a phoneNumber, msg, and when property. 
  //phoneNumber: phoneNumber to send the text to
  //msg: msg to send in the text
  //when: when to send the reminder
//If the reminder 'when' time has already passed, then use the Twilio api to send the reminder.

var CronJob = require('cron').CronJob;
const db = require('../db');
const dbModels = require('../db/index.js');
require('dotenv').config();

//I will delete this account information after completion of our Greenfield project, 
//but you can sign up for a Twilio account here with some amount of free credit: https://www.twilio.com/
var accountSid = process.env.TWILIO_SID; 
if (accountSid === 'FILL_ME_IN' || accountSid === undefined) {
  console.log('Environment variable TWILIO_SID not defined');
}
var authToken = process.env.TWILIO_TOKEN;
if (authToken === 'FILL_ME_IN' || authToken === undefined) {
  console.log('Environment variable TWILIO_TOKEN not defined');
}

//Twilio REST API: http://twilio.github.io/twilio-node/
var client = require('twilio')(accountSid, authToken); 

var job = new CronJob('10 * * * * *', 
  function() {
    dbModels.ReminderTable.findOne({order: [['when']]})
    .then(function(reminder) {
      if (!!reminder) {
        var now = new Date();
        var reminderDate = new Date(reminder.when);
        console.log(now, reminderDate);
        if (now >= reminderDate) { //compare the current date to the reminder date
          client.sendMessage({ 
            to: reminder.phoneNumber, 
            from: '+19786753367 ', 
            body: reminder.msg,
          }, function(err, responseData) { //this function is executed when a response is received from Twilio
            if (!err) { // "err" is an error received during the request, if any
              console.log(responseData.from);
              console.log(responseData.body); 
              reminder.destroy();
              //delete the reminder in the database so there are no repeat text messages
            }
          });
        } else {
          console.log('no reminders');
        }        
      }
    });
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'America/Los_Angeles' //timezone
);