/*
* Dependencias
*/
var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  gutil = require('gulp-util');

// Source and destination folder
var
  source = 'src/',
  dest = 'public/';

// bootstrap scss source
var bootstrapSass = {
  in: './bower_components/bootstrap-sass/'
};

// plugins
var plugins = {
  in: './ababool_plugins/'
};

// fonts
var fonts = {
  in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
  out: dest + 'fonts/'
};

var images = {
  in: source + 'images/*.*',
  out: dest + 'images/'
};

// css source file: .scss files
var css = {
  in: source + 'css/main.scss',
  out: dest + 'stylesheets/'
};

//task fonts
gulp.task('fonts', function() {
  return gulp
    .src(fonts.in)
    .pipe(gulp.dest(fonts.out))
});

//task images
gulp.task('images', function() {
  return gulp
    .src(images.in)
    .pipe(gulp.dest(images.out))
});

// compile CSS
gulp.task('sass', function() {
  return gulp
    .src(css.in)
    .pipe(sass({includePaths: [bootstrapSass.in + '/assets/stylesheets', plugins.in],}))
    .pipe(gulp.dest(css.out))
});

gulp.task('createapp', function() {

  gulp
    .src('ababool_plugins/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/ababool_plugins'));

  gulp
    .src('bin/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/bin' ));

  gulp
    .src('config/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/config'));

  gulp
    .src('routes/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/routes'));

  gulp
    .src('src/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/src'));

  gulp
    .src('views/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/views'));

  gulp
    .src('*.*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + ''));

  return;

});


gulp.task('updateapp', function() {

  gulp
    .src('bin/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/bin' ));

  gulp
    .src('routes/**/*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + '/routes'));

  gulp
    .src('*.*')
    .pipe(gulp.dest('../apps/' + gutil.env.name + ''));

  return;

});


// javascrits
gulp.task('javascrits', function() {
    gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './src/js/ababool.js',
    './ababool_plugins/**/*.js'])
        .pipe(concat('ababool.min.js'))
        .pipe(gulp.dest('./public/javascripts/'));
});


gulp.task('update', ['updateapp'] , function() {
  console.log('App updated: ' + gutil.env.name);
});

gulp.task('app', ['createapp'] , function() {
  console.log('App created: ' + gutil.env.name);
});

// default task
gulp.task('default', ['sass', 'fonts', 'images','javascrits'] , function() {
  //var www = require('./bin/www');
});
