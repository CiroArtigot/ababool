//example of loading data

var mongoose = require('mongoose');
var comment_schema = new mongoose.Schema({
  name:   String,
  email:    String,
  comment: String,
  date: Date
}, {collection : 'comments'});

mongoose.model('Comm', comment_schema);
mongoose.connect('mongodb://localhost/ababooldb');
var Comm = mongoose.model('Comm');

Comm
    .find({}) // will get all users
    .exec(function(err, comments) {

        console.log('comments:' + comments);
        module.exports = comments;

    });
