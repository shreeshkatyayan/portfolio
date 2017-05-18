'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stripDebug = require('gulp-strip-debug');
var vinylBuffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var size = require('gulp-size');

function bundle(devMode) {
	if (devMode) {
		return function() {
			return browserify({
				entries: ['./src/app.js'],
				debug: true
			}).bundle()
				.on('error', gutil.log.bind(gutil, "Browserify Error"))
				.pipe(source('app.min.js'))
				.pipe(vinylBuffer())
				.pipe(sourcemaps.init({loadMaps: true}))
				.pipe(sourcemaps.write('./'))
				.pipe(size({
					title: "app.min.js"
				}))
				.pipe(gulp.dest('./dist/js'));
		}
	} else {
		return function() {
			return browserify({
				entries: ['./src/app.js'],
				debug: true
			}).bundle()
				.on('error', gutil.log.bind(gutil, "Browserify Error"))
				.pipe(source('app.min.js'))
				.pipe(vinylBuffer())
				.pipe(stripDebug())
				.pipe(uglify({
					compress: true
				}))
				.on('error', gutil.log)
				.pipe(size({
					title: "app.min.js"
				}))
				.pipe(size({
					title: "app.min.js",
					gzip: true
				}))
				.pipe(gulp.dest('./dist/js'));
		}
	}
}

module.exports = bundle;
