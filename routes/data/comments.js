//example of loading data

module.exports.loaddata = function (req, res, next, current, conf, pages, data) {

  var mongoose = require('mongoose');
  var Comm =  require('./models/comments.js');

    Comm
        .find({}).find({}).limit(5).sort( { date: -1 } )
        .exec(function(err, comments) {
            data['feedbacks'] =  comments;
            res.render('index', {
              "cur" :current,
              "token": req.session.token,
              "url": req.url.substr(1),
              "pages": pages,
              "conf": conf,
              "data": data
            });
        });
};
