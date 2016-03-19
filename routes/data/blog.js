//example of loading data

module.exports.loaddata = function(req, res, next, pages, config, params, view) {

    var helper = require('./helper.js');
    var data = helper.getPosts(pages, "blog");

    res.render(view, {
      "pages": pages,
      "conf": config,
      "data": data, 
      "params" : params
    });

};
