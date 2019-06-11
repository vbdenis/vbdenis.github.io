
const gulp = require('gulp');
const twig = require('gulp-twig');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const minify = require("gulp-csso");
const prettyHtml = require("gulp-pretty-html");
const svgstore = require("gulp-svgstore");
const imagemin = require("gulp-imagemin");
const copy = require("gulp-copy");
const del = require("del");
const clean = require("gulp-clean");
const svgmin = require("gulp-svgmin");


/*______ Local-server ______*/
function browserSync () {
  browsersync.init({
    server: {
      baseDir: "./app"
    },
    notify: false
  });

	gulp.watch('app/sass/**/*.scss', gulp.series('sass'))
  	gulp.watch('app/**/*.js').on('change', browsersync.reload);
	gulp.watch("app/img/icon-svg/*.svg", gulp.series('svgstoreDev'));
	gulp.watch("app/img/icon-svg/sprite/sprite-svg.svg").on('change', browsersync.reload);
	gulp.watch('app/templates/**/*.twig').on('change', gulp.series('twig','htmlbeautify', browsersync.reload));
};


/*______ Twig ______*/

function Twig() {
	return gulp.src("app/templates/*.twig")
		.pipe(twig())
		.pipe(gulp.dest('app/'))
};

/*______ Sass ______*/
function Sass() {
		return gulp.src('app/sass/style.scss')
			.pipe(sass())
			.pipe(rename('style.css'))
			.pipe(autoprefixer(["last 15 version", "> 1%", 'firefox 14', "ie 8", "ie 7"], { cascade: true }))
			.pipe(gcmq())
			.pipe(gulp.dest('app/css'))
			.pipe(browsersync.stream());
};

function SassBuild() {
	return gulp.src('app/sass/style.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(autoprefixer(["last 15 version", "> 1%", 'firefox 14', "ie 8", "ie 7"], { cascade: true }))
		.pipe(gcmq())
		.pipe(gulp.dest('build/app/css'))
		.pipe(browsersync.stream());
}

function Cssmin () {
	return gulp.src("app/css/style.css")
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/app/css"))
};


/*______ SVG-sprite ______*/

function SvgstoreDev() {
	return gulp.src("app/img/icon-svg/*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite-svg.svg"))
		.pipe(gulp.dest("app/img/icon-svg/sprite/"));
};

function SvgstoreBuild() {
	return gulp.src("build/app/img/icon-svg/*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite-svg.svg"))
		.pipe(gulp.dest("build/app/img/icon-svg/sprite/"))
};


/*______ Minific SVG ______*/

function Svgmin() {
	return gulp.src("build/app/img/icon-svg/*.svg")
		.pipe(svgmin())
		.pipe(gulp.dest("build/app/img/icon-svg/"));
};


/*______ Clean SVG-sprite ______*/

function Clean() {
	return del('app/img/icon-svg/sprite/sprite-svg.svg');
}

function CleanBuild() {
	return gulp.src('build/app/img/icon-svg/sprite/sprite-svg.svg', { read: false })
		.pipe(clean({ force: false }));
}

/*______ Minific Images ______*/

function Imagemin() {
	return gulp.src("build/app/img/**/*.{png,jpg,gif}")
		.pipe(imagemin([
			imagemin.optipng({ optimizationLevel: 3 }),
			imagemin.jpegtran({ progressive: true })
		]))
		.pipe(gulp.dest("build/app/img"));
}

/*______ Copy Files ______*/
function Copyfile() {
	return gulp.src([
		"app/fonts/**/*.{woff,woff2,eot,ttf,svg}",
		"app/img/**",
		"app/js/**",
		"app/libs/**",
		"app/*.html"
	], {
			base: "."
		})
		.pipe(gulp.dest("build"));
};

/*______ Del files ______*/
function Del() {
	return del('build');
};

/*______ Html Beautify ______*/	

function Htmlbeautify () {
	return gulp.src('./app/*.html')
		.pipe(prettyHtml({
			indent_size: 2,
			indent_char: ' ',
			unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
		}))
		.pipe(gulp.dest('./app'));
};


gulp.task('serve', browserSync);

gulp.task('twig', Twig);

gulp.task('sass', Sass);

gulp.task('sass:build', SassBuild);

gulp.task('cssmin', Cssmin);

gulp.task('imagemin', Imagemin);

gulp.task('clean', Clean);

gulp.task("svgstoreDev", SvgstoreDev);

gulp.task("svgStore:build", gulp.series(CleanBuild, SvgstoreBuild));

gulp.task('svgmin', Svgmin);

gulp.task('del', Del);

gulp.task('copy', Copyfile);

gulp.task('htmlbeautify', Htmlbeautify);

gulp.task('build', gulp.series('del', 'copy', 'sass:build', 'svgmin', 'svgStore:build', 'cssmin', 'imagemin'));

gulp.task('dev', gulp.series('sass', 'clean', 'svgstoreDev', 'twig', 'serve'));
// gulp.task('dev', gulp.series('sass', 'clean', 'svgstoreDev', 'twig', 'htmlbeautify', 'serve'));
// gulp.task('dev', gulp.series('sass', 'twig', 'htmlbeautify', 'serve'));
// gulp.task('dev', gulp.series('sass', 'twig', 'serve'));
