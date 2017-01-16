//All controllers interacting with the DB must include this line
db = require('../models');

//Define controller functions using a variable 
var test = function (req, res){
  res.sendFile( process.cwd() + "/views/test.html");
}

module.exports = test;