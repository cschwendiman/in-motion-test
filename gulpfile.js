// Borrowed from: https://gist.github.com/benhowdle89/9533185

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');

var hbsfy = require("hbsfy").configure({
  extensions: ["html"]
});

gulp.task('watch', function() {
	var props = {entries: ['./index.js']};
	var bundler = watchify(browserify(props));

	bundler.transform(hbsfy);

	bundler.on('update', rebundle);

	function rebundle() {
		return bundler.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./dist/js/'))
			.pipe(livereload());
	}

	return rebundle();
});
