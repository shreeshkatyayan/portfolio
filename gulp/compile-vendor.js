var gulp = require('gulp');

var concat = require('gulp-concat');
var size = require('gulp-size');

function concatVendorFiles(devMode) {
    return gulp.src([
		'./bower_components/angular/angular.min.js',
		'./bower_components/angular-route/angular-route.min.js'
	])
        .pipe(concat('vendor.min.js'))
        .pipe(size({
            title: "vendor.min.js",
        }))
		.pipe(size({
            title: "vendor.min.js",
			gzip: true
        }))
        .pipe(gulp.dest('./dist/js/'));
}

module.exports = concatVendorFiles;
