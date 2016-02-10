var express = require('express');
var router = express.Router();

// the Ababool vars
var ababool = require("../config/pages.json");
var pages = ababool.pages;
var conf = require("../config/ababool.json");
var Controller = require ('./controller');

//  you can request by get and access to da api
router.get('/api/comments', Controller.getComments);

// if the request is by post you cannot access from the o
router.post('/api/form', Controller.setComment);

router.post('/ajax', function(req, res, next) {

  var page = req.query.id;
  var current = '';
  var data = {};
  var theurl = req.url.substr(1);

  for (i in ababool.pages)
    if(page==i && ababool.pages[i]['ajax']>=1) current = i;

  // load data
  if(ababool.pages[current]['data'])
    require('./data/' + ababool.pages[current]['data']).loaddata(req, res, next, current, conf, pages, data);
  else
    res.render('ajax', {
      "cur" :current,
      "token": req.session.token,
      "url": theurl,
      "pages": pages,
      "conf": conf,
      "data": data
    });

});

// router for all other peticions
router.get('/*', function(req, res, next) {

  var current = '';
  var theurl = req.url.substr(1);
  var data = {};

  // default page
  for (i in ababool.pages)
    if(ababool.pages[i]['default']==1) current = i;

  // request page
  for (i in ababool.pages)
    if(theurl==i && ababool.pages[i]['blocked']!=1) current = i;

  // load data
  if(ababool.pages[current]['data'])
    require('./data/' + ababool.pages[current]['data']).loaddata(req, res, next, current, conf, pages, data);
  else
    res.render('index', {
      "cur" :current,
      "token": req.session.token,
      "url": theurl,
      "pages": pages,
      "conf": conf,
      "data": data
    });

});

module.exports = router;
