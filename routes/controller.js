
var mongoose = require('mongoose');
var models = require('./data/models/comments.js');
var Comment  = mongoose.model('Comm');


//GET - Return all tvshows in the DB
exports.getComments = function(req, res) {
    Comment.find(function(err, comments) {
      if(err) res.send(500, err.message);
      res.status(200).jsonp(comments);
    });
};

// Guarda un objeto Persona en base de datos
exports.setComment = function(req, res) {
    var datetime = new Date();
    var session = req.session.token;

    if( session != req.body.params.token) {
        res.send({status:'FAIL', session : 'No'});
    } else {

      Comment.create({
          name : req.body.params.name,
          email: req.body.params.email,
          comment: req.body.params.comment,
          date: datetime
        },
        function(err, comment) {
          if (err)
            res.send(err);
          else {
            res.send({status:'OK'});
          }
        });
    }
	};
