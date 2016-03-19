//example of loading data

module.exports.loaddata = function(req, res, next, pages, config, params, view) {

  var mongoose = require('mongoose');
  var Comm =  require('./models/comments.js');
  var data = {};

    Comm
        .find({}).find({}).limit(5).sort( { date: -1 } )
        .exec(function(err, comments) {
            data['feedbacks'] =  comments;
            res.render(view, {
              "pages": pages,
              "conf": config,
              "data": data,
              "params" : params
            });
        });
};
