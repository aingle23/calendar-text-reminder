//All controllers interacting with the DB must include this line
db = require('../models');

//export all files from the module using the syntax below
module.exports.test = require('./test.js');
module.exports.preference = require('./preference.js');

