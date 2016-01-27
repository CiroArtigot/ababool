/*
* Dependencias
*/
var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass');

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

// default task
gulp.task('default', ['sass', 'fonts', 'images','javascrits'] , function() {
  //var www = require('./bin/www');
});
