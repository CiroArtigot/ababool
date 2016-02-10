

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comment_schema = new Schema({
  name:   String,
  email:    String,
  comment: String,
  date: Date
}, {collection : 'comments'});

module.exports = mongoose.model('Comm', comment_schema);
