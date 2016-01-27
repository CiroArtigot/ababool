
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ababooldb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  //console.log('connected');
});

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');
var session = require('express-session');
var models = require('./routes/model/comment')(app, mongoose);
var routes = require('./routes/index');
var parseurl = require('parseurl');
//var users = require('./routes/users');

//the express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(function (req, res, next) {
    var token = req.session.token;
    if (!token) {
      var uid = uuid.v1();
      token = req.session.token = uid;
    }
    console.log('pathname: ' + parseurl(req).pathname);
    next()
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
