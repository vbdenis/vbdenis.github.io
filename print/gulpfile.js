var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var ftp = require('gulp-ftp');
var notify = require("gulp-notify");
var plumber  = require('gulp-plumber');
var onError = notify.onError({
   title:    'Error',
   // subtitle: '<%= file.relative %> did not compile!',
   message:  '<%= error.message %>'   
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src("src/sass/*.sass")
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
	        	browsers: ['last 5 versions'],
	        	cascade: false
        }))        
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


gulp.task('ftp', function() {
	return gulp.src('src/**')
	.pipe(ftp({
      host: '88.99.148.81',
      user: 'sirex228',
      pass: 'gPwE19OSVY',
      remotePath:'/www/denisv12.ru/lesson-18'
  }))
	.pipe(gutil.noop());
});


gulp.task('default', ['serve']);

