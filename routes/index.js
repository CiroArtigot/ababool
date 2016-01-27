var express = require('express');
var router = express.Router();

// the Ababool vars
var ababool = require("../config/pages.json");
var conf = require("../config/ababool.json");
var Controller = require ('./controller');

router.get('/api/comments', Controller.getComments);
router.post('/api/form', Controller.setComment);

router.post('/ajax', function(req, res, next) {
  var theurl = req.url.substr(1);
  var page = req.query.id;
  var current = '';
  var data = {};

  for (i in ababool.pages)  {
    if(page==i && ababool.pages[i]['ajax']==1) current = i;
  }
  // load data

  if(ababool.pages[current]['data'])
    data[current] = require ('./data/' + ababool.pages[current]['data']);

  if(current && req.query.token == req.session.token )
    res.render('ajax', {
      id:req.query.id,
      token: req.session.token,
      cur:current,
      url: theurl,
      pages: ababool.pages,
      conf: conf,
      data: data
    });
});

// router for all other peticions
router.get('/*', function(req, res, next) {

  var theurl = req.url.substr(1); // problably needed to change this
  var current = '';
  var data = {};

  // default page
  for (i in ababool.pages)
    if(ababool.pages[i]['default']==1) current = i;

  // request page
  for (i in ababool.pages)
    if(theurl==i && ababool.pages[i]['blocked']!=1) current = i;

  // load data
  for (i in ababool.pages){
    if(ababool.pages[i]['data']
    && ( ababool.pages[i]['ajax']!=1 || (ababool.pages[i]['ajax']==1 && current == i))
  ) data[i] = require ('./data/' + ababool.pages[i]['data']);
  }

  //console.log('data: ' + JSON.stringify(data));

  res.render('index', {
    cur:current,
    token: req.session.token,
    url: theurl,
    pages: ababool.pages,
    conf: conf,
    data: data
  });
});

module.exports = router;
