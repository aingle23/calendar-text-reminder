var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/calendarTextReminder");


module.exports.user = require('./user.js');
