
var mongoose = require('mongoose');
var models = require('./data/models/comments.js');
var helper = require('./data/helper.js');
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


exports.getRSS = function(req, res) {

  var posts = [];
  var pages = helper.getPages(req, res);
  var config = helper.getConfig(req, res);
  var posts = helper.getPosts(pages, req.params.tag);

  res.render('rss', {
    "posts": posts,
    "config" : config,
    "tag" : req.params.tag
  });

};


  exports.getTag = function(req, res, next, view, char) {

    var pages = helper.getPages(req, res);
    var config = helper.getConfig(req, res);
    var data = helper.getPosts(pages, req.params.tag);
    var ldjson = "";
    var params = helper.getTagParams(req, res, view, pages, config, ldjson, char);

    res.render(view, {
      "pages": pages,
      "conf": config,
      "data": data,
      "params" : params
    });
  };


  //get direct pages petition
  exports.getPages = function(req, res, next, view, char) {

    var data = {};
    var pages = helper.getPages(req, res);
    var config = helper.getConfig(req, res);
    var current = helper.getCurrent(req, res, view, pages, char);

    var ldjson = helper.getSchema(req, res, view, pages, current);
    var params = helper.getParams(req, res, view, pages, current, config, ldjson, char);

    // load data if is needed
    if(pages[current]['data'])
      require('./data/' + pages[current]['data']).loaddata(req, res, next, pages, config, params, view);
    else
      res.render(view, {
        "pages": pages,
        "conf": config,
        "data": data,
        "params" : params
      });

  };
