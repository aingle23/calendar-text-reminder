var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  id:  String,
  email: String,
  phone: String,
  password:   String,
  passwordRecovery: [{ key: String, date: Date }],
  createdAt: Date,
  updatedAt: Date,
  verify: {
    email: Boolean,
    phone:  Boolean
  }
});

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;