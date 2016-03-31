var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userSchema = db.Schema({
  id: Number, 
  username: String, 
  password: String, 
  timestamps: {type: Date, default: Date.now()}
});

var User = db.model('User', userSchema);

module.exports = User;
