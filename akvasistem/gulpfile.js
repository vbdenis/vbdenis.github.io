var gulp = require('gulp');
var twig = require("gulp-twig");
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
// var ftp = require('gulp-ftp');
var notify = require("gulp-notify");
var plumber  = require('gulp-plumber');
var onError = notify.onError({
   title:    'Error',
   // subtitle: '<%= file.relative %> did not compile!',
   message:  '<%= error.message %>'   
});

gulp.task("templates", function() {
	return gulp.src("app/templates/*.html")
	 .pipe(twig())
	 .pipe(gulp.dest('app/'))
});

// Static Server + watching scss/html files
// gulp.task('serve', ['templates', 'sass'], function() {
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/sass/**/*.scss", ['sass']);
    gulp.watch("app/templates/**/*.html", ['templates']).on('change', browserSync.reload);
    // gulp.watch("src/**/*.html", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {  
    gulp.src("app/sass/*.scss")
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
	        	browsers: ['last 5 versions'],
	        	cascade: false
        }))        
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});


// gulp.task('ftp', function() {
// 	return gulp.src('src/**')
// 	.pipe(ftp({
//       host: '',
//       user: '',
//       pass: '',
//       remotePath:''
//   }))
// 	.pipe(gutil.noop());
// });

// gulp.task('dev', function() {
//     gulp.watch("app/templates/**/*.html", ["templates"], browserSync.reload);
// });

gulp.task('default', ['serve']);
// gulp.task('build', ['serve']);

