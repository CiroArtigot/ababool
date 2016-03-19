var express = require('express');
var router = express.Router();
var Controller = require ('./controller');

// *** Routers ***** //

// router for the GET request comments to database
router.get('/api/comments', Controller.getComments);

// router for the POST comments to database
router.post('/api/form', Controller.setComment);

// router for the auto rss page petition
router.get('/rss/:tag', function(req, res){
  Controller.getRSS(req, res);
});

// router for the auto tag page petition
router.get('/tag/:tag', function(req, res, next){
  Controller.getTag(req, res, next, 'index', 1);
});

// router for the AMP auto tag page petition
router.get('/amp/tag/:tag', function(req, res, next){
  Controller.getTag(req, res, next, 'index_amp', 1);
});

// router for the AJAX petitions
router.post('/ajax', function(req, res, next) {
  Controller.getPages(req, res, next, 'ajax', 1);
});

// router for the amp pages
router.get('/amp/*', function(req, res, next) {
  Controller.getPages(req, res, next, 'index_amp', 5);
});

// router for the rest
router.get('/*', function(req, res, next) {
  Controller.getPages(req, res, next, 'index', 1);
});

module.exports = router;
